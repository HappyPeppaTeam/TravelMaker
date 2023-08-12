import { Calendar } from '@fullcalendar/core';
import React, { useEffect, useRef } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import moment from 'moment';


const StepOne = () => {

  const formStyle = {
    backgroundColor: '#b2d2e8',
    minHeight: '500px'
  }


  return (
    <div id="newJourneyForm1" className='p-3 shadow rounded' style={formStyle}>
      <div className="my-3">
        <label htmlFor="inputJourneyName" className="form-label">行程名稱</label>
        <input type="text" className="form-control" id="inputJourneyName" aria-describedby="inputJourneyName"
          placeholder="ex. 金瓜石兩日遊" />
      </div>
      <div className="my-3">
        <label htmlFor="inputJourneyDestination" className="form-label">行程目的地</label>
        <input type="text" className="form-control" id="inputJourneyDestination"
          aria-describedby="inputJourneyDestination" placeholder="ex. 台北" />
      </div>
      <div className="my-3">
        <label htmlFor="inputJourneyStart" className="form-label">開始日期</label>
        <input type="date" className="form-control" id="inputJourneyStart" aria-describedby="inputJourneyStart" />
      </div>
      <div className="my-3">
        <label htmlFor="inputJourneyDays" className="form-label">行程天數</label>
        <input type="number" className="form-control" id="inputJourneyDays" aria-describedby="inputJourneyDays" />
      </div>
    </div>
  )
}


const StepTwo = ({ calendarRef }) => {

  const formStyle = {
    backgroundColor: 'rgb(178, 210, 232, 0.5)',
    minHeight: '500px',
    display: 'none'
  }

  return (
    <div id="newJourneyForm2" className="rounded shadow" style={formStyle}>
      <div id="calendarNew" className="p-3" ref={calendarRef}>

      </div>
    </div>
  )
}


const StepThree = () => {


  const formStyle = {
    backgroundColor: 'rgb(178, 210, 232, 0.5)',
    minHeight: '500px',
  }

  return (
    <div id="newJourneyForm3" className='p-3 shadow rounded' style={formStyle}>
      <div className="mb-3">
        <div className="mb-3">
          <div className="mb-1">加入圖片</div>
          <label htmlFor="formFileMultiple" className="form-label">本機上傳</label>
          {/* <input className="form-control mb-2" type="file" id="formFileMultiple" multiple accept='image/*' ref={inputRef} onChange={handleUpload}/> */}
          <input className="form-control mb-2" type="file" id="formFileMultiple" multiple accept='image/*' />

          <label htmlFor="fromAlbum" className="form-label">相簿上傳</label>

          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary dropdown-toggle" data-bs-auto-close="outside"
              data-bs-toggle="dropdown" type="button" id="fromAlbum" aria-expanded="false">
              選擇相簿
            </button>
            <ul className="dropdown-menu" id="albumMenu">

              <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                data-bs-target="#albumModal">新北兩日遊</a></li>
              <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                data-bs-target="#albumModal">金瓜石之旅</a></li>
              <li><a className="dropdown-item" href="#" data-bs-toggle="modal"
                data-bs-target="#albumModal">安平好熱</a></li>
              <li><a className="dropdown-item" href="#">我的收藏</a></li>

            </ul>
            <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon"
              aria-describedby="button-addon1" />
          </div>

          <div className="container-fluid mt-3" id='imageContainer'></div>
        </div>

        <div className="mb-3">
          <label htmlFor="publicRadio" className="form-label">公開設定</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="privacyRadio" value="" id="publicRadio" />
            <label className="form-check-label" htmlFor="publicRadio">
              公開
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="privacyRadio" value="" id="privateRadio"
              defaultChecked />
            <label className="form-check-label" htmlFor="privateRadio">
              不公開
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="inputNoteJourney" className="form-label">備註</label>
          <textarea className="form-control" id="inputNoteJourney" rows="3"></textarea>
        </div>
      </div>
    </div>
  );
}



const NowJourneyForm = () => {

  const containerStyle = {
    minHeight: 'calc(100vh - 96px)',
  }

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


  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  return (
    <div className='container rounded my-3' style={containerStyle}>
      {/* <StepOne /> */}
      <StepTwo calendarRef={calendarRef} />
      <StepThree />
    </div>
  )
}

export default NowJourneyForm