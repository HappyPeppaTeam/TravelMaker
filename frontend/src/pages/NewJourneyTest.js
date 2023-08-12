import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios';
import moment from 'moment';
import '../css/calendar.css'

const INITIAL_EVENTS = [
    {
        title: "event 1",
        start: "2023-08-12 03:00:00",
        end: "2023-08-12 04:00:00",
        description:"aaa",
        allDay: false
    },
    {
        title: "event 2",
        start: "2023-08-12 05:00:00",
        end: "2023-08-12 06:00:00",
        description:"aaa",
        allDay: false
    },
    {
        title: "event 3",
        start: "2023-08-12 08:00:00",
        end: "2023-08-12 09:00:00",
        description:"aaa",
        allDay: false
    },
    {
        title: "event 4",
        start: "2023-08-12 13:00:00",
        end: "2023-08-12 14:00:00",
        description:"aaa",
        allDay: false
    },
]

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
            initialView: 'timeGridWeek',
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
            select: handleDateSelect,
            initialEvents: INITIAL_EVENTS,
            eventClick: handleEventClick,

        })

        calendarObj.render();
    }, []);


    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                description: 'empty description',
                allDay: selectInfo.allDay
            })
        }
    }

    const handleGetEvent = () => {
        const curr_events = calendarObj.getEvents();

        curr_events.forEach(element => {
            alert(`title: ${element.title} \nstart: ${element.start} \nend:${element.end} `);
        });
        // console.log(curr_events.title);
    }

    

    const handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }


    const handleAddEvent = () => {
        const events = calendarObj.getEvents().map(({title, start, end, extendedProps}) => ({
            title: title,
            start: moment(start).format('YYYY-MM-DD HH:mm:ss'),
            end: moment(end).format('YYYY-MM-DD HH:mm:ss'),
            description: extendedProps.description
        }));

        console.log(events);


        const requestData = {
            journey_id : 10,
            events: events,
        }

        
        const reqUrl = "http://localhost/TravelMaker/Backend/public/api/updateEvents";
        axios.post(reqUrl, requestData)
        .then(response => {
            console.log("response: ", response.data);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
    }


    const handleResize = () => {
        calendarObj.updateSize();
    }


    return (
        <>
            <h1>MyCalendar</h1>

            <hr />
            <div className='container mb-3'>
                <div id="calenderContainer" className='rounded shadow p-3 container-fluid' ref={calendarRef} style={containerStyle}>

                </div>
                <div className='mt-3 d-flex'>
                    <button className='btn btn-primary' onClick={() => {
                        calendarObj.render();
                    }}>render</button>
                    <button className='btn btn-warning' onClick={handleGetEvent}>Get event</button>
                    <button className='btn btn-danger' onClick={handleAddEvent}>Add event</button>
                    <button className='btn btn-info' onClick={handleResize}>Resize</button>
                </div>
            </div>
        </>
    );



}


export default NewJourneyTest;
