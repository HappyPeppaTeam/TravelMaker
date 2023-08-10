import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import listPlugin from '@fullcalendar/list';





// let calendarEl = document.getElementById('calendarContainer');



function NewJourneyTest() {

    const calendarRef = useRef(null);
    let calendarObj;

    useEffect(() => {
        calendarObj = new Calendar(calendarRef.current, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listWeek'
            },
            themeSystem: 'bootstrap5'
        })
    }, [])


    return (
        <>
            <h1>MyCalendar</h1>
            <button className='btn btn-primary' onClick={() => {
                calendarObj.render();
            }}>render</button>
            <hr />
            <div id="calenderContainer" ref={calendarRef}>

            </div>
        </>
    );
}

export default NewJourneyTest;
