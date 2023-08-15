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

import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';
// import { useLocation } from 'react-router-dom';
import '../css/createAlbum.css';


function useImage() {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesData, setImagesData] = useState([]);

  // console.log(imagesData);
  // 上傳圖片
  const handleUpload = (e) => {
    const images = [...e.target.files].map((file) => {
      return {
        name: file.name,
        url: URL.createObjectURL(file),
      }
    });

    const imagesData = e.target.files;
    setImagesData([...imagesData]);
    setImages(images);
  }

  // 移除單一圖片
  const handleRemove = (e, imgIndex) => {
    e.preventDefault();
    setImages(images.filter((img, index) => {
      if (index === imgIndex) {
        URL.revokeObjectURL(img.url);
      }
      return index !== imgIndex;
    }))
    setImagesData(imagesData.filter((item, index) => {
      return index !== imgIndex;
    }))
  }

  // 移除全部圖片
  const handleRemoveAll = (e) => {
    e.preventDefault();
    images.forEach((img) => {
      URL.revokeObjectURL(img.url);
    });
    setImages([]);
    setImagesData([]);
  }

  useEffect(() => {
    if (images.length === 0 && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [images])

  return {
    images,
    imagesData,
    handleUpload,
    handleRemove,
    handleRemoveAll,
    inputRef,
  }
}





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
    const endDay = moment(formData.journeyStart).add(e.target.value, 'days').format('YYYY-MM-DD');
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

  const { images, imagesData, handleUpload, handleRemove, inputRef } = useImage();

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      images: images,
      imagesData: imagesData
    }))
  }, [imagesData, images])

  return (
    <div id="newJourneyForm3" className='p-3 shadow rounded' style={formStyle}>
      <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">圖片上傳</label>
          {/* <input className="form-control mb-2" type="file" id="formFileMultiple" multiple accept='image/*' ref={inputRef} onChange={handleUpload}/> */}
          <input className="form-control mb-2" type="file" id="formFileMultiple" multiple accept='image/*'
            onChange={(e) => {
              handleUpload(e);

            }}
            ref={inputRef} />


          <div className='row row-cols-2 row-cols-lg-3 mt-3 g-3'>
            {images.map((image, index) => {
              return (
                <div className='col' key={index}>
                  <img className='selectedImg w-100' src={image.url} alt={image.name}/>
                  <div className='imgInfo'>
                    <div className='fileName w-100 d-flex justify-content-between align-items-center'>
                      <p className='m-0 py-2 text-white text-center'>{image.name}</p>
                      <button className='btn remove' onClick={(e) => handleRemove(e, index)}><i className="bi bi-x-circle fs-4"></i></button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          
          <div className="container-fluid mt-3" id='imageContainer'></div>
        </div>

        <div className="mb-3">
          <label htmlFor="publicRadio" className="form-label">公開設定</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="privacyRadio" value={1} id="publicRadio"
              checked={formData.privacy === 1}
              onChange={handlePrivacyChange} />
            <label className="form-check-label" htmlFor="publicRadio">
              公開
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="privacyRadio" value={0} id="privateRadio"
              checked={formData.privacy === 0}
              onChange={handlePrivacyChange} />
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
    borderRadius: '10px',
    // display: 'none'
  }

  const sectionStyle = {
    backgroundColor: 'rgb(178, 210, 232, 0.5)',
    minHeight: '100px',
    borderRadius: '10px',
  }



  return (
    <div id="newJourneyBrowse" className='p-3' >

      <div id="browseCalendarContainer" className="w-100 mb-3" >
        <h2 className='mb-3'>行程表</h2>
        <div id="browserCalendar" ref={calendarBrowseRef} className='p-3 shadow' style={formStyle}>

        </div>
      </div>
      <div id="browseTextContainer" className="w-100 my-5" >
        <h2>目的地: </h2>
        <div className='shadow mb-5 d-flex align-items-center' style={sectionStyle}>
          <p className='fs-2 ps-3'>{formData.destination}</p> 
        </div>
        <h2>備註</h2>
        <div className='shadow mb-5' style={sectionStyle}>
          <p>{formData.description}</p>
        </div>
      </div>
      <div id="browseImageContainer" className="w-100 mb-3">
        <h2>相片</h2>

        <div className='row g-2'>
          {formData.images.map((image, index) => (
            <div className='col-3' >
              <div style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: 'cover',
                height: '200px',
              }}></div>
            </div>
          ))}
        </div>

      </div>
      


    </div>
  
  )
}


const EventAddModal = ({ modalTitle, handleModalSave, handleCloseModal, handleRemoveEvent, addEvent, setAddEvent }) => {


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
                <input type="text" className="form-control" id="eventName" value={addEvent.title} onChange={handleAddEventTitle} />
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


const ProgressBar = ({ step }) => {

  const progressBarWidthStyle = {
    width: `${step * 100 / 4}%`,
  }

  const progressBarHeightStyle = {
    height: '2px',
  }

  return (
    <div className="progress my-3" role="progressbar" aria-label="progressbar" aria-valuenow="25" aria-valuemin="0"
      aria-valuemax="100" style={progressBarHeightStyle}>
      <div className="progress-bar" id="progressBar" style={progressBarWidthStyle}></div>
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
        initialDate: (formData.journeyStart === "" || null ? new Date() : formData.journeyStart),
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

      // show result
      console.log(formData);
    }

    if (step === 3) {

      const currentEvents = calendarObjRef.current.getEvents().map(({ title, start, end, extendedProps }) => ({
        title: title,
        start: moment(start).format('YYYY-MM-DD HH:mm:ss'),
        end: moment(end).format('YYYY-MM-DD HH:mm:ss'),
        description: extendedProps.description
      }));

      // console.log(currentEvents);

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
    thumbnailId: "images/taipei101.jpg",
    journeyStart: "",
    journeyEnd: "",
    images: [],
    imagesData: [],
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

      if (modalTitle === "新增活動") {
        calendarApi.addEvent({
          title: addEvent.title,
          start: selectedEvent.startStr,
          end: selectedEvent.endStr,
          description: addEvent.description,
          allDay: selectedEvent.allDay,
        });
      }
      else if (modalTitle === "修改活動") {
        selectedEvent.event.setProp('title', addEvent.title);
        selectedEvent.event.setExtendedProp('description', addEvent.description);
      }


    }

    calendarApi.unselect();
    handleCloseModal();
  };


  const handleRemoveEvent = () => {
    if (modalTitle === "修改活動" && selectedEvent.event) {
      if (window.confirm(`確定要刪除活動'${selectedEvent.event.title}'?`)) {
        selectedEvent.event.remove();
      }
    }
    handleCloseModal();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqUrl = "http://localhost/TravelMaker/Backend/public/api/addJourney";

    const requestData = {
      title: formData.title,
      description: formData.description,
      events: formData.events,
      thumbnail_id: formData.thumbnailId,
      privacy: formData.privacy,
      user_id: formData.userId
    };

    
    // get journeyId request data

    const reqJourneyIdUrl = `http://localhost/TravelMaker/Backend/public/api/getJourneyId`;
    const reqJourneyIdParams = {
      title: formData.title,
      user_id: formData.userId
    }

     // get upload image request data
    const reqImgUploadUrl = "http://localhost/TravelMaker/Backend/public/api/uploadJourneyImages";
    const imageReqForm = new FormData();

    
    
    formData.imagesData.forEach((image, index) => {
      imageReqForm.append(`images[${index}]`, image);
    });



    axios.post(reqUrl, requestData)
      .then(response => {
        console.log("response: ", response.data);
        return  axios.get(reqJourneyIdUrl, {
          params: reqJourneyIdParams
        })
      })
      .then(response => {
        const journeyId = response.data['journey_id'];
        imageReqForm.append('journey_id', journeyId);
        return axios.post(reqImgUploadUrl, imageReqForm);
      })
      .then(uploadResponse => {
        console.log(uploadResponse); 
      })
      .then(() => {
        window.location = "http://localhost:3000/journey";
      }) 
      .catch(error => {
        console.error("Error: ", error);
      })
      

    
    
    

    // axios.get(reqJourneyIdUrl, {
    //   params: reqJourneyIdParams
    // })
    // .then(response => {
    //   const journeyId = response.data['journey_id'];
    //   imageReqForm.append('journey_id', journeyId);
    //   return axios.post(reqImgUploadUrl, imageReqForm);
    // })
    // .then(uploadResponse => {
    //   console.log(uploadResponse); 
    // })
    // .then(() => {
    //   window.location = "http://localhost:3000/journey";
    // }) 
    // .catch(error => {
    //   console.error("Error: ", error);
    // })


    // axios.get(reqJourneyIdUrl, {
    //   params: reqJourneyIdParams
    // })
    // .then(response => {
    //   journeyId = response.data['journey_id'];
    //   // console.log(response.data);
    // })
    // .catch(error => {
    //   console.error("Error: ", error);
    // });

    
    // axios.post(reqImgUploadUrl, imageReqForm)
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.error("Error: ", error);
    // });

   


    



    // console.log(formData.imagesData);
    // console.log(imageReqForm.get('images'));
    // window.location = "http://localhost:3000/journey";
    
  }


  return (
    <>
      <div className='container-fluid p-0 d-flex'>
        <Sidebar />
        <div className='container rounded my-4' style={containerStyle}>
          <h1>建立新行程 <span>{formData.title}</span></h1>
          <ProgressBar step={step} />
          <hr></hr>
          <div style={{ display: step === 1 ? 'block' : 'none' }}>
            <StepOne setFormData={setFormData} formData={formData} />
          </div>
          <div style={{ display: step === 2 ? 'block' : 'none' }}>
            <StepTwo setFormData={setFormData} formData={formData} calendarRef={calendarRef} />
          </div>
          <div style={{ display: step === 3 ? 'block' : 'none' }}>
            <StepThree setFormData={setFormData} formData={formData} />
          </div>
          <div style={{ display: step === 4 ? 'block' : 'none' }}>
            <StepFour setFormData={setFormData} formData={formData} calendarBrowseRef={calendarBrowseRef} />
          </div>
          {/* {step === 1 && <StepOne setFormData={setFormData} formData={formData} />}
          {step === 2 && <StepTwo setFormData={setFormData} formData={formData} calendarRef={calendarRef} />}
          {step === 3 && <StepThree setFormData={setFormData} formData={formData} />}
          {step === 4 && <StepFour setFormData={setFormData} formData={formData} calendarBrowseRef={calendarBrowseRef} />} */}
          <div className='d-flex mt-5'>
            {step > 1 && <button className='btn btn-primary' onClick={handlePrevStep}>上一步</button>}
            {step < 4 && <button className='btn btn-primary ms-auto' onClick={handleNextStep}>下一步</button>}
            {step === 4 && <button className='btn btn-primary ms-auto' style={submitBtnStyle} onClick={handleSubmit}>完成</button>}
          </div>
        </div>
      </div>
      <BotSidebar />
      <EventAddModal modalTitle={modalTitle} handleModalSave={handleModalSave} handleCloseModal={handleCloseModal} handleRemoveEvent={handleRemoveEvent} addEvent={addEvent} setAddEvent={setAddEvent} />
    </>
  )
}

export default NowJourneyForm