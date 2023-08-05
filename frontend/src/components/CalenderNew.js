import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';

function CalendarNew({newCalenderRef}) {
    return ( 
        <FullCalendar 
            plugins={[dayGridPlugin, timeGridPlugin, bootstrap5Plugin, interactionPlugin]}
            initialView="timeGridWeek"
            themeSystem='bootstrap5'
            selectable={true}
            ref={newCalenderRef}
        />
    );
}

export default CalendarNew;