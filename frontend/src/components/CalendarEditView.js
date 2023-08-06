import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import interactionPlugin from '@fullcalendar/interaction';
import { Modal } from 'bootstrap';



const EventModal = () => {

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}






function CalendarEditView({ calendarEditRef, journeyDetail }) {

    const editModalRef = useRef(null);
    useEffect(() => {

        editModalRef.current = new Modal('#exampleModal');
        console.log(editModalRef.current);

    }, []);


    const handleAddEvent = (info) => {
        // let foo = prompt('Type here');

        // console.log(info.dateStr, foo);
        editModalRef.current.toggle();
    }

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
                dateClick={function () {
                    editModalRef.current.show();
                }}
            />

            <EventModal />
        </React.Fragment>
    );
}

export default CalendarEditView;