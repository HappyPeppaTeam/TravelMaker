import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5'



function CalendarView({calenderRef, journey}) {
    return ( 
        <FullCalendar 
            plugins={[dayGridPlugin, bootstrap5Plugin, timeGridPlugin]}
            initialView="journeyTimeView"
            themeSystem='bootstrap5'
            ref={calenderRef}
            views={{
                journeyTimeView:{
                    type: 'timeGrid',
                }}
            }
            visibleRange={{
                start: new Date(journey.start),
                end: new Date(journey.end),
            }}
        />
    );
}

export default CalendarView;