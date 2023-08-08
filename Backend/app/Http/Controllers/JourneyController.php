<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JourneyController extends Controller
{

    function getUserJourneys(Request $request)
    {
        $user_id = $request['user_id'];
        $journeys = DB::select("select * from Journey where user_id = ?", [$user_id]);
        
        foreach($journeys as $journey){
            $duration = (array) $this->getJourneyDuration($journey->journey_id)[0];
            $journey_arr = (array) $journey;
            $journeyData[] = array_merge($journey_arr, $duration);
        }
        return response()->json($journeyData);
    }

    function getJourneyEvents(Request $request)
    {
        $journey_id = $request['journey_id'];
        $events = DB::select("select * from Journey_event where journey_id = ?", [$journey_id]);
        return response()->json($events);
    }

    function getJourneyDuration($journey_id)
    {
        return $duration = DB::select("call get_journey_duration(?)", [$journey_id]);
    }

    
}
