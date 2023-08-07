import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';



function CalendarView({calenderRef, journeyDetail}) {
    return ( 
        <FullCalendar 
            plugins={[dayGridPlugin, bootstrap5Plugin, timeGridPlugin, listPlugin]}
            initialView="journeyTimeView"
            themeSystem='bootstrap5'
            ref={calenderRef}
            views={{
                journeyTimeView:{ 
                    type: 'timeGrid',
                    buttonText: 'Calendar'
                },
                journeyListView:{
                    type: 'list'
                },
                journeyMonthView:{
                    type: 'dayGridMonth',
                    buttonText: 'month'
                }   
            }}
            headerToolbar={{
                start: 'journeyListView journeyTimeView journeyMonthView',
                end: 'prev,next'
            }}
            visibleRange={{
                start: new Date(journeyDetail.start),
                end: new Date(journeyDetail.end),
            }}
            events={journeyDetail.events.map(({event_name, event_description, start_time, end_time}) => ({title:event_name, description:event_description, start:new Date(start_time), end:new Date(end_time)}))}
            // events={journeyDetail.events.map(({name:title, start, end}) => ({title, start: new Date(start), end: new Date(end)}))}
        ></FullCalendar>
    );
}

export default CalendarView;