import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

function CalendarNew() {
    return ( 
        <FullCalendar 
            plugins={[dayGridPlugin, timeGridPlugin, bootstrap5Plugin]}
            initialView="timeGridWeek"
            themeSystem='bootstrap5'
        />
    );
}

export default CalendarNew;