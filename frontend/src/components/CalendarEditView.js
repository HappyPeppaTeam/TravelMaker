import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import interactionPlugin from '@fullcalendar/interaction';
import { Modal } from 'bootstrap';
import moment from 'moment';


const EventModal = ({calendarEditRef, clickInfo, setEditEvents, editEvents}) => {


    const [newEvent, setNewEvent] = useState({
        title: "",
        description: "",
        start: "",
        end: "",
    });

    useEffect(() => {
        setNewEvent({
            ...newEvent,
            start: clickInfo.date,
            end: moment(clickInfo.date).add(30, 'm').toDate(),
        })
    }, [clickInfo])

    

    const handleEventTitle = (e) => {
        // setJourneyEvent({
        //     ...journeyEvent,
        //     start: clickInfo.date,
        //     end: moment(clickInfo.date).add(30, 'm').toDate(),
        //     title: e.target.value,
        // })
        // console.log(journeyEvent);

        setNewEvent({
            ...newEvent,
            title: e.target.value,
        })
    }

    const handleEventDescription = (e) => {
        // setJourneyEvent({
        //     ...journeyEvent,
        //     start: clickInfo.date,
        //     end: moment(clickInfo.date).add(30, 'm').toDate(),
        //     description: e.target.value,
        // })
        // console.log(journeyEvent.start);   
        // console.log(journeyEvent.end);

        setNewEvent({
            ...newEvent, 
            description: e.target.value,
        })
    }

    const handleAddEvent = (e) => {
        calendarEditRef.current.calendar.addEvent({...newEvent});
        const addNewEvent = {
            event_name: newEvent.title,
            event_description: newEvent.description,
            start_time: newEvent.start_time,
            end_time: newEvent.end_time,
        }
        setEditEvents([...editEvents, addNewEvent]);
        console.log("handleAddEvent: ",editEvents);
        
    }


    return (
        <div className="modal fade" id="eventModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">新增活動</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="eventName" className="col-form-label">活動名稱</label>
                                <input type="text" className="form-control" id="eventName" onChange={handleEventTitle}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="eventDescription" className="col-form-label">活動內容</label>
                                <textarea className="form-control" id="eventDescription" onChange={handleEventDescription}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddEvent}>Add Event</button>
                    </div>
                </div>
            </div>
        </div>
    )
}






function CalendarEditView({ calendarEditRef, journeyDetail, setJourneyDetail}) {

    const editModalRef = useRef(null);
    useEffect(() => {

        editModalRef.current = new Modal('#eventModal');
        // console.log(editModalRef.current);

    }, []);

    const [clickInfo, setClickInfo] = useState('');
    const [editEvents, setEditEvents] = useState([]);

    (() => {
        setEditEvents(journeyDetail.events);
        const currentEvents = editEvents.map(({event_name, event_description, start_time, end_time}) => ({title: event_name, description: event_description, start: new Date(start_time), end: new Date(end_time)}));
        currentEvents.map((event) => {
            calendarEditRef.current.calendar.addEvent(event);
        })
    })();
    
    useEffect(() => {
        console.log('currentEvents ', currentEvents);
        console.log('Events ', editEvents);
        console.log("journeyDetail: ",editEvents);
    }, [journeyDetail])

    useEffect(() => {
        console.log("edit view: ",editEvents);
        calendarEditRef.current.getApi().render();
    }, [editEvents])


    return (
        <React.Fragment>
            <FullCalendar
                plugins={[dayGridPlugin, bootstrap5Plugin, timeGridPlugin, listPlugin, interactionPlugin]}
                initialView="journeyTimeView"
                themeSystem='bootstrap5'
                ref={calendarEditRef}
                views={{
                    journeyTimeView: {
                        type: 'timeGridWeek',
                        buttonText: 'Calendar'
                    },
                    journeyListView: {
                        type: 'list'
                    },
                    journeyMonthView: {
                        type: 'dayGridMonth',
                        buttonText: 'month'
                    }
                }}
                headerToolbar={{
                    start: 'journeyListView journeyTimeView journeyMonthView',
                    end: 'prev,next'
                }}
                selectable={true}
                initialDate={new Date(journeyDetail.journey_start)}
                editable={true}
               
                dateClick={function (info) {
                    setClickInfo(info);
                    editModalRef.current.show();
                }}
            />

            <EventModal calendarEditRef={calendarEditRef} clickInfo={clickInfo} setEditEvents={setEditEvents} setJourneyDetail={setJourneyDetail} editEvents={editEvents}/>
        </React.Fragment>
    );
}

export default CalendarEditView;