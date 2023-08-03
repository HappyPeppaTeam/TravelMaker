import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5'



function CalendarEditView({calendarEditRef}) {
    return ( 
        <FullCalendar 
            plugins={[dayGridPlugin, timeGridPlugin, bootstrap5Plugin]}
            initialView="timeGridWeek"
            themeSystem='bootstrap5'
            ref={calendarEditRef}
        />
    );
}

export default CalendarEditView;