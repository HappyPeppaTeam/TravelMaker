<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

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

    function getJourneyId(Request $request){

        try {
            $title = $request['title'];
            $userId = $request['user_id'];
    
            $result = DB::select(
                "select journey_id from journey where journey_name = ? and user_id = ?"
            , [$title, $userId])[0];
    
            return response()->json($result);
        }
        catch (Exception $e){
            return response("Error: " . $e->getMessage(), 404);
        }
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
            $events = $request['events'];

            $isInsert = DB::insert(
                "
                insert into Journey (journey_name, description, user_id, privacy, thumbnail_id)
                values(?, ?, ?, ?, ?);
                ",
                [$journeyName, $journeyDescription, $userId, $privacy, $thumbnailId]
            );

            if (!$isInsert) {
                return response("Failed to insert record", 500);
            } 


            $journeyIdResult = DB::select("select journey_id from journey where journey_name = ? and user_id = ?;", [$journeyName, $userId]);
            $journeyId = $journeyIdResult[0]->journey_id;
            $isAddEvent = $this->addNewEvents($journeyId, $events);

            return response("Add new journey: {$journeyName} successfully. Add event: {$isAddEvent}", 201);

        } catch (Exception $e) {
            return response("Error add new journey: " . $e->getMessage(), 500);
        }

        // return response()->json($journeyTitle);
    }

    function addNewEvents($journeyId, $events)
    {
        try {
            // $journeyId = $request['journey_id'];
            // $events = $request['events'];

            DB::transaction(function () use ($journeyId, $events) {
                foreach ($events as $event) {
                    $e_title = $event['title'];
                    $e_description = $event['description'];
                    $start = $event['start'];
                    $end = $event['end'];
                    $isInsert = DB::insert(
                        "
                        insert into journey_event (event_name, event_description, journey_id, start_time, end_time) 
                        values (?, ?, ?, ?, ?);
                        ",
                        [$e_title, $e_description, $journeyId, $start, $end]
                    );

                    if (!$isInsert) {
                        throw new Exception("Failed to insert event");
                    }
                };
            });


            return response('Insert events successfully');
        } catch (Exception $e) {
            return response("Error add new event: " . $e->getMessage(), 500);
        }
    }

    function deleteJourney(Request $request)
    {
        DB::beginTransaction();
        try {
            $journeyId = $request['journey_id'];
            $images = $request['images'];
            $rowsDeleted = DB::delete("delete from journey where journey_id = ?", [$journeyId]);
            $delEventRes = $this->deleteEvents($journeyId);
            $delImages = $this->deleteImages2($journeyId, $images);
            if ($rowsDeleted > 0) {
                DB::commit();
                return response("Delete {$journeyId} successfully. Event handling: {$delEventRes}, delete images: {$delImages}");
            } else {
                DB::commit();
                return response("Journey with ID {$journeyId} not found", 404);
            }
        } catch (Exception $e) {
            DB::rollBack();
            return response("Error deleting journey: " . $e->getMessage(), 500);
        }
    }

    function deleteEvents($journeyId)
    {
        DB::beginTransaction();
        try {
            $rowsDeleted = DB::delete("delete from journey_event where journey_id = ?", [$journeyId]);
            if ($rowsDeleted > 0) {
                DB::commit();
                return "Delete all events of {$journeyId} successful";
            } else {
                DB::commit();
                return "Journey {$journeyId} have no event";
            }
        } catch (Exception $e) {
            DB::rollBack();
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
                ",
                [$journeyName, $journeyDescription, $privacy, $thumbnailId, $journeyId]
            );

            $events = $request['events'];

            if ($isUpdate) {
                $isUpdateEvents = $this->updateEvents2($journeyId, $events);
                return response("Update journey ID:{$journeyId} Name:{$journeyName} successfully");
            } else {
                return response("Error: not found journey ID:{$journeyId} Name:{$journeyName}", 500);
            }
        } catch (Exception $e) {
            return response("Error updating journey: " . $e->getMessage(), 500);
        }
    }

    function updateEvents(Request $request)
    {

        try {
            $journeyId = $request['journey_id'];
            $events = $request['events'];
            $isDelete = $this->deleteEvents($journeyId);
            $isUpdate = $this->addNewEvents($journeyId, $events); 

            return response("Update journey events successfully.isDelete: {$isDelete}, isUpdate: {$isUpdate}");
        }
        catch (Exception $e) {
            return response("Error updating events: " . $e->getMessage(), 500);
        }

        
    }

    function updateEvents2($journeyId, $events)
    {

        try {
            $isDelete = $this->deleteEvents($journeyId);
            $isUpdate = $this->addNewEvents($journeyId, $events); 

            return response("Update journey events successfully.isDelete: {$isDelete}, isUpdate: {$isUpdate}");
        }
        catch (Exception $e) {
            return response("Error updating events: " . $e->getMessage(), 500);
        }

        
    }


    function uploadImage(Request $request)
    {

        $journeyId = $request['journey_id'];
    
        if ($request->hasFile('images')){
            $files = $request->file('images');

            $uploadCount = 0;
            DB::beginTransaction();
            $getCurrentJourneyImages = DB::select("select * from journey_image where journey_id = ?", [$journeyId]);
            $isHaveThumbnail = DB::select(
                "
                select thumbnail_id from journey where journey_id = ? and thumbnail_id is not null;
                "
            , [$journeyId]);
            foreach($files as $file){
                if ($file->isValid()){
                    $fileName = $file->getClientOriginalName();
                    $path =  $file->store('images', 'public');


                    DB::insert("
                        insert into journey_image (image_name, image_url, journey_id)
                        values (?, ?, ?);
                        "
                    ,[$fileName, $path, $journeyId]);
                    
                    // TODO
                    if ($uploadCount == 0){
                        $isThumbnail = $this->insertThumbnailImg($journeyId, $path);
                    }

                    $uploadCount ++;
                }
            }

            if ($uploadCount > 0){
                DB::commit();
                return response()->json(['message' => "{$uploadCount} files uploaded successfully, {$isThumbnail}"]);
            }
            else {
                DB::rollBack();
                return response()->json(['message' => 'No valid files uploaded'], 400);
            }

        }


        return response()->json(['message' => 'No files uploaded'], 400);
        
    }

    function getImage(Request $request){
        
        try {

            $journeyId = $request['journey_id'];
    
            $result = DB::select(
                "select * from journey_image where journey_id = ?"
            , [$journeyId]);
    
            if(!$result) {
                return response()->json([]);
            }
    
            return response()->json($result);
        }
        catch (Exception $e) {
            return response("Error get journey image: " . $e->getMessage(), 500);
        }
    }

    function insertThumbnailImg($journeyId, $path){
        try{
            $isUpdate = DB::update("update journey set thumbnail_id = ? where journey_id = ?;", [$path, $journeyId]);
            
            if (!$isUpdate){
                return response("Error: can not find journey");
            }
            return response("Update thumbnail sccessfully.");
        }
        catch (Exception $e){
            return response("Error update thumbnail id: " . $e->getMessage(), 500);
        }
    }


    function deleteImages(Request $request) {
        
        DB::beginTransaction();
        
        try {

            $journeyId = $request['journey_id'];
            $images = $request['images'];
            // var_dump($images);
            // die($images[0]);
            foreach($images as $image){
                // echo($image['image_url']);
                $imageUrl = $image["image_url"];
                Storage::disk('public')->delete($imageUrl);
                DB::delete("delete from journey_image where journey_id = ? and image_url = ?;", [$journeyId, $imageUrl]);
            }
            DB::commit();
            return response()->json(['message' => 'delete images succeed.']);
        }
        catch (Exception $e){
            DB::rollBack();
            throw $e;
        }


    }

    function deleteImages2($journeyId, $images) {
        
        DB::beginTransaction();
        
        try {
            // var_dump($images);
            // die($images[0]);
            foreach($images as $image){
                // echo($image['image_url']);
                $imageUrl = $image["image_url"];
                Storage::disk('public')->delete($imageUrl);
                DB::delete("delete from journey_image where journey_id = ? and image_url = ?;", [$journeyId, $imageUrl]);
            }
            DB::commit();
            return response()->json(['message' => 'delete images succeed.']);
        }
        catch (Exception $e){
            DB::rollBack();
            throw $e;
        }


    }
}



