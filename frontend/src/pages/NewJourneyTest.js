import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'





// let calendarEl = document.getElementById('calendarContainer');

const containerStyle = {
    backgroundColor: "rgb(178, 210, 232, 0.5)",
    color: '#2F4E63',
}



function NewJourneyTest() {

    const calendarRef = useRef(null);
    let calendarObj;

    useEffect(() => {
        calendarObj = new Calendar(calendarRef.current, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin, interactionPlugin],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listWeek'
            },
            themeSystem: 'bootstrap5',
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true, // alternatively, use the `events` setting to fetch from a feed
            
        })

        calendarObj.render();
    }, []);


    return (
        <>
            <h1>MyCalendar</h1>
            <button className='btn btn-primary' onClick={() => {
                calendarObj.render();
            }}>render</button>
            <hr />
            <div className='container mb-3'>
                <div id="calenderContainer" className='rounded shadow p-3 fs-4' ref={calendarRef} style={containerStyle}>

                </div>
            </div>
        </>
    );

}


export default NewJourneyTest;
