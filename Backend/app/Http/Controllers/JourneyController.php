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
        return response()->json($journeys);
    }

    function getJourneyEvents(Request $request)
    {
        $journey_id = $request['journey_id'];
        $events = DB::select("select * from Journey_event where journey_id = ?", [$journey_id]);
        $duration = $this->getJourneyDuration($journey_id);
        $result = [
            'events' => $events,
            // 'duration' => $duration,
        ];
        return response()->json($result);
    }

    function getJourneyDuration($journey_id)
    {
        return $duration = DB::select("call get_journey_duration(?)", [$journey_id]);
    }
}
