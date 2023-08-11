<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JourneyController extends Controller
{

    function getUserJourneys(Request $request)
    {
        $userId = $request['user_id'];
        $journeys = DB::select("select * from Journey where user_id = ?", [$userId]);

        foreach ($journeys as $journey) {
            $duration = (array) $this->getJourneyDuration($journey->journey_id)[0];
            $journeyArr = (array) $journey;
            $journeyData[] = array_merge($journeyArr, $duration);
        }
        return response()->json($journeyData);
    }

    function getJourneyEvents(Request $request)
    {
        $journeyId = $request['journey_id'];
        $events = DB::select("select * from Journey_event where journey_id = ?", [$journeyId]);
        return response()->json($events);
    }

    function getJourneyDuration($journeyId)
    {
        return $duration = DB::select("call get_journey_duration(?)", [$journeyId]);
    }

    function addNewJourney(Request $request)
    {
        try {
            $journeyName = $request['title'];
            $journeyDescription = $request['description'];
            $userId = $request['user_id'];
            $privacy = $request['privacy'];
            $thumbnailId = $request['thumbnail_id'];

            $isInsert = DB::insert(
                "
                insert into Journey (journey_name, description, user_id, privacy, thumbnail_id)
                values(?, ?, ?, ?, ?);
                ",
                [$journeyName, $journeyDescription, $userId, $privacy, $thumbnailId]
            );

            if ($isInsert) {
                return response("Add new journey: {$journeyName} successfully.", 201);
            } else {
                return response("Failed to insert record", 500);
            }
        } catch (Exception $e) {
            return response("Error add new journey: " . $e->getMessage(), 500);
        }

        // return response()->json($journeyTitle);
    }

    function addNewEvents(Request $request){
        try {
            $journeyId = $request['journey_id'];
            $events = $request['events'];
            
            foreach($events as $event) {
                $e_title = $event['title'];
                $e_description = $event['description'];
                $start = $event['start'];
                $end = $event['end'];
                $isInsert = DB::insert(
                    "
                    insert into journey_event (event_name, event_description, journey_id, start_time, end_time) 
                    values (?, ?, ?, ?, ?);
                    "
                , [$e_title, $e_description, $journeyId, $start, $end]);
            };
        
            return response('Insert event successfully');
        }
        catch (Exception $e) {
            return response("Error add new event: " . $e->getMessage(), 500);
        }

    }

    function deleteJourney(Request $request)
    {
        try {
            $journeyId = $request['journey_id'];
            $rowsDeleted = DB::delete("delete from journey where journey_id = ?", [$journeyId]);
            $delEventRes = $this->deleteEvents($journeyId);
            if ($rowsDeleted > 0) {
                return response("Delete {$journeyId} successfully. Event handling: {$delEventRes}");
            } else {
                return response("Journey with ID {$journeyId} not found", 404);
            }
        } catch (Exception $e) {
            return response("Error deleting journey: " . $e->getMessage(), 500);
        }
    }

    function deleteEvents($journeyId)
    {

        try {
            $rowsDeleted = DB::delete("delete from journey_event where journey_id = ?", [$journeyId]);
            if ($rowsDeleted > 0) {
                return "Delete all events of {$journeyId} successful";
            } else {
                return "Journey {$journeyId} have no event";
            }
        } catch (Exception $e) {
            return response("Error deleting events: " . $e->getMessage(), 500);
        }
    }

    function updateJourney(Request $request)
    {
        try {
            $journeyId = $request['journey_id'];
            $journeyName = $request['title'];
            $journeyDescription = $request['description'];
            $privacy = $request['privacy'];
            $thumbnailId = $request['thumbnail_id'];
    
            $isUpdate = DB::update(
                "
                update journey set 
                journey_name = ?, 
                description = ?, 
                privacy = ?, 
                thumbnail_id = ?, 
                edit_time = CURRENT_TIME()
                where journey_id = ?;
                "
            , [$journeyName, $journeyDescription, $privacy, $thumbnailId, $journeyId]);

            if ($isUpdate) {
                return response("Update journey ID:{$journeyId} Name:{$journeyName} successfully");
            }
            else {
                return response("Error: not found journey ID:{$journeyId} Name:{$journeyName}" , 500);
            }
            
        }
        catch (Exception $e){
            return response("Error updating journey: " . $e->getMessage(), 500);
        }

    }

    function updateEvents () {

    }

}
