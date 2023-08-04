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
                },
                journeyListView:{
                    type: 'list'
                }   
            }}
            visibleRange={{
                start: new Date(journeyDetail.start),
                end: new Date(journeyDetail.end),
            }}
            events={journeyDetail.journeyEvents.map(({name:title, start, end}) => ({title, start: new Date(start), end: new Date(end)}))}
        ></FullCalendar>
    );
}

export default CalendarView;