import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import interactionPlugin from '@fullcalendar/interaction';
import { Modal } from 'bootstrap';
import moment from 'moment';


const EventModal = ({calendarEditRef, clickInfo, setJourneyDetail}) => {


    const [journeyEvent, setJourneyEvent] = useState({
        title: "",
        description: "",
        start: "",
        end: "",
    });

    const handleEventTitle = (e) => {
        setJourneyEvent({
            ...journeyEvent,
            start: clickInfo.date,
            end: moment(clickInfo.date).add(30, 'm').toDate(),
            title: e.target.value,
        })
        console.log(journeyEvent);
    }

    const handleEventDescription = (e) => {
        setJourneyEvent({
            ...journeyEvent,
            start: clickInfo.date,
            end: moment(clickInfo.date).add(30, 'm').toDate(),
            description: e.target.value,
        })
        // console.log(journeyEvent.start);   
        // console.log(journeyEvent.end);
    }

    const handleAddEvent = (e) => {
        calendarEditRef.current.calendar.addEvent({...journeyEvent});
        setJourneyDetail({})
        // console.log(calendarEditRef.current.calendar.getEvents());
        // calendarEditRef.current.getApi().render();
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





    return (
        <React.Fragment>
            <FullCalendar
                plugins={[dayGridPlugin, bootstrap5Plugin, timeGridPlugin, listPlugin, interactionPlugin]}
                initialView="journeyTimeView"
                themeSystem='bootstrap5'
                ref={calendarEditRef}
                views={{
                    journeyTimeView: {
                        type: 'timeGrid',
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
                visibleRange={{
                    start: new Date(journeyDetail.start),
                    end: new Date(journeyDetail.end),
                }}
                editable={true}
                events={journeyDetail.journeyEvents.map(({ name: title, start, end }) => ({ title, start: new Date(start), end: new Date(end) }))}
                dateClick={function (info) {
                    setClickInfo(info);
                    editModalRef.current.show();
                }}
            />

            <EventModal calendarEditRef={calendarEditRef} clickInfo={clickInfo} />
        </React.Fragment>
    );
}

export default CalendarEditView;