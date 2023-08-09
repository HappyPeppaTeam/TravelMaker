import React, { useEffect, useRef, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { Modal } from 'bootstrap';
import moment from 'moment';




const EventModal = ({newCalenderRef, clickInfo, setNewEvents}) => {


    const [newEvent, setNewEvent] = useState({
        title: "",
        description: "",
        start: clickInfo.date,
        end: moment(clickInfo.date).add(30, 'm').toDate(),
    });

    useEffect(() => {
        setNewEvent((prevEvent) => ({
            ...prevEvent,
            start: clickInfo.date,
            end: moment(clickInfo.date).add(30, 'm').toDate(),
        }))
    }, [clickInfo])

    

    const handleEventTitle = (e) => {
    
        setNewEvent((prevEvent) =>({
            ...prevEvent,
            title: e.target.value,
        }))
    }

    const handleEventDescription = (e) => {
    
        setNewEvent((prevEvent) => ({
            ...prevEvent, 
            description: e.target.value,
        }))
    }

    const handleAddEvent = (e) => {
        newCalenderRef.current.calendar.addEvent({...newEvent});
        setNewEvents(prevEvents => [...prevEvents, newEvent]);
        setNewEvent({
            title: "",
            description: "",
            start: "",
            end: "",
        })
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
                                <input type="text" className="form-control" id="eventName" onChange={handleEventTitle} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="eventDescription" className="col-form-label">活動內容</label>
                                <textarea className="form-control" id="eventDescription" onChange={handleEventDescription} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddEvent}>新增</button>
                    </div>
                </div>
            </div>
        </div>
    )
}





function CalendarNew({ newCalenderRef, setNewEvents, setNewJourney, newJourney}) {


    const eventModalRef = useRef(null);

    useEffect(() => {
        eventModalRef.current = new Modal('#eventModal');
    }, []);

    const handleEventModal = () => {
        eventModalRef.current.show();
    }

    const [clickInfo, setClickInfo] = useState("");
    
    return (
    <>
        <FullCalendar
            plugins={[dayGridPlugin, bootstrap5Plugin, timeGridPlugin, listPlugin, interactionPlugin]}
            selectable={true}
            editable={true}
            initialView="journeyTimeView"
            themeSystem='bootstrap5'
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
            initialDate={newJourney.journeyStart}
            dateClick={function (info) {
                handleEventModal();
                setClickInfo(info);
                // console.log(info);
            }}
            ref={newCalenderRef}
        />
        <EventModal newCalenderRef={newCalenderRef} setNewEvents={setNewEvents} clickInfo={clickInfo}/>
    </>
    );
}

export default CalendarNew;