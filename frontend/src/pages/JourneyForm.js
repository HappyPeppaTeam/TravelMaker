import { Calendar } from '@fullcalendar/core';
import React, { useEffect, useRef, useState } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import moment from 'moment';
import { Modal } from 'bootstrap';


const StepOne = ({ formData, setFormData }) => {

  const formStyle = {
    backgroundColor: 'rgb(178, 210, 232, 0.5)',
    minHeight: '500px',
  }

  const handleTitle = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      title: e.target.value
    }))
  }

  const handleDestination = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      destination: e.target.value,
    }))
  }

  const handleJourneyStart = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      journeyStart: moment(e.target.value).format('YYYY-MM-DD'),
    }))
  }

  const handleJourneyEnd = (e) => {
    e.preventDefault();
    const endDay = moment(formData.journeyStart).add(e.target.value, 'days');
    setFormData((prevData) => ({
      ...prevData,
      journeyEnd: endDay,
    }))
  }


  return (
    <div id="newJourneyForm1" className='p-3 shadow rounded' style={formStyle}>
      <div className="my-3">
        <label htmlFor="inputJourneyName" className="form-label">行程名稱</label>
        <input type="text" className="form-control" id="inputJourneyName" aria-describedby="inputJourneyName"
          placeholder="ex. 金瓜石兩日遊"
          value={formData.title}
          onChange={handleTitle} />
      </div>
      <div className="my-3">
        <label htmlFor="inputJourneyDestination" className="form-label">行程目的地</label>
        <input type="text" className="form-control" id="inputJourneyDestination"
          aria-describedby="inputJourneyDestination" placeholder="ex. 台北"
          value={formData.destination}
          onChange={handleDestination} />
      </div>
      <div className="my-3">
        <label htmlFor="inputJourneyStart" className="form-label">開始日期</label>
        <input type="date" className="form-control" id="inputJourneyStart" aria-describedby="inputJourneyStart"
          onChange={handleJourneyStart} />
      </div>
      <div className="my-3">
        <label htmlFor="inputJourneyDays" className="form-label">行程天數</label>
        <input type="number" className="form-control" id="inputJourneyDays" aria-describedby="inputJourneyDays"
          onChange={handleJourneyEnd} />
      </div>
    </div>
  )
}


const StepTwo = ({ formData, setFormData, calendarRef }) => {

  const formStyle = {
    backgroundColor: 'rgb(178, 210, 232, 0.5)',
    minHeight: '500px',
    // display: 'none'
  }

  return (
    <div id="newJourneyForm2" className="rounded shadow p-3" style={formStyle}>
      <div id="calendarNew" ref={calendarRef}>

      </div>
    </div>
  )
}


const StepThree = ({ formData, setFormData }) => {


  const formStyle = {
    backgroundColor: 'rgb(178, 210, 232, 0.5)',
    minHeight: '500px',
    // display: 'none',
  }


  const handleDescription = (e) => {
    e.preventDefault();

    setFormData((prevData) => ({
      ...prevData,
      description: e.target.value,
    }))
  }

  const handlePrivacyChange = (e) => {
    e.preventDefault();
    const newPrivacyValue = parseInt(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      privacy: newPrivacyValue,
    }))
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
            <input className="form-check-input" type="radio" name="privacyRadio" value={1} id="publicRadio" 
            checked={formData.privacy === 1}
            onChange={handlePrivacyChange}/>
            <label className="form-check-label" htmlFor="publicRadio">
              公開
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="privacyRadio" value={0} id="privateRadio"
              checked={formData.privacy === 0}
              onChange={handlePrivacyChange}/>
            <label className="form-check-label" htmlFor="privateRadio">
              不公開
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="inputNoteJourney" className="form-label">備註</label>
          <textarea className="form-control" id="inputNoteJourney" rows="3"
            value={formData.description}
            onChange={handleDescription}
          ></textarea>
        </div>
      </div>
    </div>
  );
}


const StepFour = ({ calendarBrowseRef, formData }) => {
  const formStyle = {
    backgroundColor: 'rgb(178, 210, 232, 0.5)',
    minHeight: '500px',
    // display: 'none'
  }

  return (
    <div id="newJourneyBrowse" className='rounded shadow p-3' style={formStyle}>

      <div id="browseCalendarContainer" className="w-100 mb-3" >
        <h2>行程表</h2>
        <div id="browserCalendar" ref={calendarBrowseRef}>

        </div>
      </div>
      <div id="browseTextContainer" className="w-100 mb-3" >
        <h2>目的地: {formData.destination}</h2>
        <h2>備註</h2>
        <p>{formData.description}</p>
      </div>
      <div id="browseImageContainer" className="w-100 mb-3">
        <h2>Image</h2>
      </div>
    </div>
  )
}


const EventAddModal = ({modalTitle, handleModalSave, handleCloseModal, handleRemoveEvent, addEvent, setAddEvent}) => {


  const handleAddEventTitle = (e) => {
    e.preventDefault();
    setAddEvent((prev) => ({
      ...prev,
      title: e.target.value,
    }))
  }

  const handleAddEventDescription = (e) => {
    e.preventDefault();
    setAddEvent((prev) => ({
      ...prev,
      description: e.target.value,
    }))
  }

  return (
    <div className="modal fade" id="eventModal" tabIndex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{modalTitle}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              <div className="mb-3">
                <label htmlFor="eventName" className="col-form-label">活動名稱</label>
                <input type="text" className="form-control" id="eventName" value={addEvent.title} onChange={handleAddEventTitle}/>
              </div>
              <div className="mb-3">
                <label htmlFor="eventDescription" className="col-form-label">活動內容</label>
                <textarea className="form-control" id="eventDescription" value={addEvent.description} onChange={handleAddEventDescription}></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {modalTitle === "修改活動" && <button type="button" className="btn btn-danger me-auto" onClick={handleRemoveEvent}>Remove Event</button>}
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Cancel</button>
            <button type="button" className="btn btn-primary" id="saveEventChanges" onClick={handleModalSave}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}


const NowJourneyForm = () => {

  const containerStyle = {
    minHeight: 'calc(100vh - 96px)',
  }

  const submitBtnStyle = {
    display: 'block',
  }

  const calendarRef = useRef(null);
  const calendarBrowseRef = useRef(null);
  const calendarObjRef = useRef(null);
  const calendarObjBrowseRef = useRef(null);
  const [step, setStep] = useState(1);


  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
    // console.log(formData);
  }

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
    // console.log(formData);
  }
  
  
  

  useEffect(() => {
    if (step === 2) {
      calendarObjRef.current = new Calendar(calendarRef.current, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin, interactionPlugin],
        initialView: 'timeGridWeek',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        initialDate: (formData.journeyStart === "" || null ? new Date() : formData.journeyStart),
        themeSystem: 'bootstrap5',
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true, // alternatively, use the `events` setting to fetch from a feed
        select: handleDateSelect,
        // select: handleOpenModal,
        eventClick: handleEventClick,
        initialEvents: formData.events,
      })

      calendarObjRef.current.render();
    }

    if (step === 4) {
      calendarObjBrowseRef.current = new Calendar(calendarBrowseRef.current, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin, interactionPlugin],
        initialView: 'timeGridWeek',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        themeSystem: 'bootstrap5',
        editable: false,
        events: formData.events,
      })
      calendarObjBrowseRef.current.render();
    }

    if (step == 3){
      
      const currentEvents = calendarObjRef.current.getEvents().map(({title, start, end, extendedProps}) => ({
        title: title,
        start: moment(start).format('YYYY-MM-DD HH:mm:ss'),
        end: moment(end).format('YYYY-MM-DD HH:mm:ss'),
        description: extendedProps.description
      }));

      console.log(currentEvents);

      setFormData((prevData) => ({
        ...prevData,
        events: currentEvents,
      }));

    
    }

  }, [step]);


  const [formData, setFormData] = useState({
    title: "",
    description: "",
    destination: "",
    userId: 0,
    privacy: 0,
    thumbnailId: 0,
    journeyStart: "",
    journeyEnd: "",
    events: [],
  });

  // set user id
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      userId: 1,
    }))
  }, []);
  



  const eventModalRef = useRef(null);

  useEffect(() => {
    eventModalRef.current = new Modal('#eventModal');
  }, [])

  const [modalTitle, setModalTitle] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [addEvent, setAddEvent] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
  });

  const handleOpenModal = () => {
    eventModalRef.current.show();
  }

  const handleCloseModal = () => {
    eventModalRef.current.hide();
  }

  const handleDateSelect = (selectInfo) => {
    setSelectedEvent(selectInfo);
    setModalTitle("新增活動");
    setAddEvent({
      title: "",
      start: "",
      end: "",
      description: "",
    })
    handleOpenModal();
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo);
    setModalTitle("修改活動");
    setAddEvent({
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
    })
    handleOpenModal();
  }


  const handleModalSave = () => {
    const calendarApi = selectedEvent.view.calendar;

    if (addEvent.title) {
      // if (modalTitle === 'Add Event') {
      //   calendar.addEvent({
      //     title: eventTitle,
      //     start: selectedEvent.startStr,
      //     end: selectedEvent.endStr,
      //     extendedProps: { description: eventDescription },
      //     allDay: selectedEvent.allDay,
      //   });
      // } else if (modalTitle === 'Edit Event') {
      //   selectedEvent.event.setProp('title', eventTitle);
      //   selectedEvent.event.setExtendedProp('description', eventDescription);
      // }
      calendarApi.addEvent({
        title: addEvent.title,
        start: selectedEvent.startStr,
        end: selectedEvent.endStr,
        description: addEvent.description,
        allDay: selectedEvent.allDay,
      });

      // const currentEvents = calendarApi.getEvents().map(({title, start, end, extendedProps}) => ({
      //   title: title,
      //   start: moment(start).format('YYYY-MM-DD HH:mm:ss'),
      //   end: moment(end).format('YYYY-MM-DD HH:mm:ss'),
      //   description: extendedProps.description
      // }));

      // console.log(currentEvents);

      // setFormData((prevData) => ({
      //   ...prevData,
      //   events: currentEvents,
      // }));
    }

    calendarApi.unselect();
    handleCloseModal();
  };


  const handleRemoveEvent = () => {
    if (modalTitle === "修改活動" && selectedEvent.event) {
      if (window.confirm(`確定要刪除活動'${selectedEvent.event.title}'?`)){
        selectedEvent.event.remove();
      }
    }
    handleCloseModal();
  }


 
  return (
    <>
      <div className='container rounded my-3' style={containerStyle}>
        <h1>建立新行程 <span>{formData.title}</span></h1>
        <hr></hr>
        <div style={{display: step === 1 ? 'block' : 'none'}}>
          <StepOne setFormData={setFormData} formData={formData} />
        </div>
        <div style={{display: step === 2 ? 'block' : 'none'}}>
          <StepTwo setFormData={setFormData} formData={formData} calendarRef={calendarRef} />
        </div>
        <div style={{display: step === 3 ? 'block' : 'none'}}>
          <StepThree setFormData={setFormData} formData={formData} />
        </div>
        <div style={{display: step === 4 ? 'block' : 'none'}}>
          <StepFour setFormData={setFormData} formData={formData} calendarBrowseRef={calendarBrowseRef} />
        </div>
        {/* {step === 1 && <StepOne setFormData={setFormData} formData={formData} />}
        {step === 2 && <StepTwo setFormData={setFormData} formData={formData} calendarRef={calendarRef} />}
        {step === 3 && <StepThree setFormData={setFormData} formData={formData} />}
        {step === 4 && <StepFour setFormData={setFormData} formData={formData} calendarBrowseRef={calendarBrowseRef} />} */}
        <div className='d-flex mt-5'>
          {step > 1 && <button className='btn btn-primary' onClick={handlePrevStep}>上一步</button>}
          {step < 4 && <button className='btn btn-primary ms-auto' onClick={handleNextStep}>下一步</button>}
          {step === 4 && <button className='btn btn-primary ms-auto' style={submitBtnStyle}>完成</button>}
        </div>
      </div>
      <EventAddModal modalTitle={modalTitle} handleModalSave={handleModalSave} handleCloseModal={handleCloseModal} handleRemoveEvent={handleRemoveEvent} addEvent={addEvent} setAddEvent={setAddEvent}/>
    </>
  )
}

export default NowJourneyForm