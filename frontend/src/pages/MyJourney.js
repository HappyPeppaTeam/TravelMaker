import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../css/MyJourney.css';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal } from 'bootstrap';
import moment from 'moment';
import withAuthorization from '../hook/withAuthorization';

const DEFUALT_IMG_URL = "http://localhost/TravelMaker/Backend/storage/app/public/images/defaultJourney.jpg";


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




const AddNewJourney = () => {

    const plusIconStyle = {
        fontSize: '2rem',
        color: '#2F4E63',
    }

    const addNewThumbnailStyle = {
        width: '100%',
        height: '200px',
        backgroundColor: 'gray',
    }

    return (
        <Link to="/journey/newjourney"
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center">
            <div style={addNewThumbnailStyle}
                className="d-flex align-items-center justify-content-center rounded shadow add-new-journey"
                id="addNewBox">
                <i className="bi bi-plus-lg" style={plusIconStyle}></i>
            </div>
        </Link>
    )
}


function JourneyThumbnail({ journey, setShow, setClickJourney, setPageTitle, setJourneyData }) {

    const thumbNailStyle = {
        backgroundImage: journey.thumbnail_id ? `url(http://localhost/TravelMaker/Backend/storage/app/public/${journey.thumbnail_id})` : `url(${DEFUALT_IMG_URL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '200px',
        width: '100%',
    }

    const handleThumbnailClick = (e) => {
        e.preventDefault();

    



        setClickJourney(journey.journey_id);
        setPageTitle(journey.journey_name);
        setShow(2);
        // console.log("Journey ID: ", journey.journey_id);
    }

    return (
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center dropdown"
        >
            <div className="rounded shadow"
                style={thumbNailStyle} onClick={handleThumbnailClick}>
                <div className="overlay rounded d-flex justify-content-center align-items-center">
                    <div className='fs-5 fw-semibold'>{journey.journey_name}</div>
                </div>
            </div>
        </div>
    );
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
                        {modalTitle === "修改活動" && <button type="button" className="btn btn-danger me-auto" onClick={handleRemoveEvent}>刪除活動</button>}
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>取消</button>
                        <button type="button" className="btn btn-primary" id="saveEventChanges" onClick={handleModalSave}>確認</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const JourneyDetail = ({ setShow, journeyData, calendarViewRef, setPageTitle }) => {

    const browserCalendarStyle = {
        backgroundColor: 'rgb(178, 210, 232, 0.5)',
        borderRadius: '10px',
    }

    const editLinkStyle = {
        textDecoration: 'none',
    }

    const descriptionViewStyle = {
        // backgroundColor: 'rgb(254, 228, 203, 0.5)',
        backgroundColor: 'rgb(178, 210, 232, 0.5)',
        borderRadius: '10px',
        minHeight: '100px'
    }

    const imageViewStyle = {
        // backgroundColor: 'rgb(233, 231, 253, 0.5)',
        backgroundColor: 'rgb(178, 210, 232, 0.5)',
        borderRadius: '10px',
        minHeight: '200px'
    }

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
    }

    const handleReturn = (e) => {
        e.preventDefault();
        setPageTitle("我的行程");
        setShow(1);
    }

    const handleEditView = (e) => {
        e.preventDefault();
        setPageTitle(`正在編輯 - ${journeyData.title}`);
        setShow(3);
    }

    return (
        <div id="JourneyBrowse" className='p-3'>
            <div id="browseCalendarContainer" className="w-100 mb-5" >
                <div className='d-flex align-items-center'>
                    <h2 className='mb-3'>行程表</h2>
                    <a className='ms-auto fs-3' style={editLinkStyle} href='/#'
                        onClick={handleEditView}><i className="bi bi-pencil-square"></i><span className='ms-2'>編緝</span></a>
                </div>
                <div className='shadow p-3' style={browserCalendarStyle}>
                    <div id="browserCalendar" ref={calendarViewRef}>

                    </div>
                </div>
            </div>
            <div id="browseTextContainer" className="w-100 mb-5" >
                <h2 className='mb-3'>備註</h2>
                <div className='shadow p-3' style={descriptionViewStyle}>
                    <p>{journeyData.description}</p>
                </div>
            </div>
            <div id="browseImageContainer" className="w-100 mb-5">
                <h2 className='mb-3'>相片</h2>
                <div className='shadow p-3' style={imageViewStyle}>
                    <div className='row g-2'>

                        {/* TODO */}

                        {/* <div className='col-md-6 col-lg-4 col-xl-3'>
                            <img src='../images/street.jpg' className='rounded shadow' style={imageStyle}></img>
                        </div> */}
                        {/* {console.log(journeyData.images)} */}
                        {journeyData.images.map((image, index) => (
                            <div key={index} className='col-md-6 col-lg-4 col-xl-3'>
                                <img src={`http://localhost/TravelMaker/Backend/storage/app/public/${image.image_url}`} className='rounded shadow' style={imageStyle}></img>
                            </div>
                        ))}

                        {/* TODO */}

                    </div>
                </div>
            </div>
            <div id='buttonContainer' className='d-flex'>
                <button className='ms-auto btn btn-primary' onClick={handleReturn}>返回</button>
            </div>
        </div>
    )
}



const JourneyEdit = ({ setShow, journeyData, setJourneyData, calendarEditViewRef, setPageTitle, calendarEditViewObj, setUploadImg, uploadImg, journeys, setJourneys }) => {

    const editFormStyle = {
        borderRadius: '10px',
    }

    const calendarContainerStyle = {
        borderRadius: '10px',
        backgroundColor: 'rgb(178, 210, 232, 0.5)',
    }

    const handleEditCancel = (e) => {
        e.preventDefault();
        setPageTitle(journeyData.title);
        setShow(2);
    }

    const { images, imagesData, handleUpload, handleRemove, inputRef } = useImage();


    useEffect(() => {
        // setJourneyData((prevData) => ({
        //     ...prevData,
        //     images: images,
        //     imagesData: imagesData
        // }))

        setUploadImg({
            images: images,
            imagesData: imagesData
        });
    }, [images, imagesData])


    const handleTitleChange = (e) => {
        e.preventDefault();
        setJourneyData((prevData) => ({
            ...prevData,
            title: e.target.value,
        }))
    }

    const handleDescriptionChange = (e) => {
        e.preventDefault();
        setJourneyData((prevData) => ({
            ...prevData,
            description: e.target.value,
        }))
    }

    const handlePrivacyChange = (e) => {
        e.preventDefault();
        const newPrivacyValue = parseInt(e.target.value);
        setJourneyData((prevData) => ({
            ...prevData,
            privacy: newPrivacyValue,
        }))
    }

    const handleUpdateSubmit = (e) => {

        e.preventDefault();

        const updateEvents = calendarEditViewObj.current.getEvents().map(({ title, start, end, extendedProps }) => ({
            title: title,
            start: moment(start).format('YYYY-MM-DD HH:mm:ss'),
            end: moment(end).format('YYYY-MM-DD HH:mm:ss'),
            description: extendedProps.description
        }));

        // console.log(updateEvents);

        const requestData = {
            journey_id: journeyData.journeyId,
            title: journeyData.title,
            description: journeyData.description,
            user_id: journeyData.userId,
            privacy: journeyData.privacy,
            thumbnail_id: journeyData.thumbnailId,
            events: updateEvents
        }

        const reqUrl = "http://localhost/TravelMaker/Backend/public/api/updateJourney";

        axios.put(reqUrl, requestData)
            .then(response => {
                console.log("Update joruney: ", response);
            })
            .then(() => {
                setPageTitle(journeyData.title);
                const editJourney = journeys.map(journey =>
                (
                    journey.journey_id === journeyData.journeyId ? { ...journey, journey_name: journeyData.title } : journey
                ));
                setJourneys(editJourney);
                setShow(2);
            })
            .catch(error => {
                console.error("Error: ", error);
            });



    }

    const handleDelete = (e) => {
        e.preventDefault();

        if (window.confirm('確認刪除此行程?')) {
            const reqUrl = "http://localhost/TravelMaker/Backend/public/api/deleteJourney";

            axios.delete(reqUrl, {
                params: {
                    journey_id: journeyData.journeyId
                }
            })
                .then(response => {
                    console.log("Delete journey: ", response);
                })
                .then(() => {
                    const wantedJourneys = journeys.filter(journey => journey.journey_id != journeyData.journeyId);
                    setJourneys(wantedJourneys);
                    setPageTitle("我的行程");
                    setShow(1);
                })
                .catch(error => {
                    console.error("Error: ", error);
                })
        }

    }



    return (
        <>
            <div className='d-flex mb-3'>
                <div className='ms-auto text-danger fs-4' onClick={handleDelete}><i className="bi bi-trash3"></i><span>刪除</span></div>
            </div>
            <div id="newJourneyForm1" className='p-3 shadow bg-light mb-3' style={editFormStyle}>
                <div className="my-3">
                    <label htmlFor="inputJourneyName" className="form-label">行程名稱</label>
                    <input type="text" className="form-control" id="inputJourneyName" aria-describedby="inputJourneyName"
                        placeholder="ex. 金瓜石兩日遊"
                        value={journeyData.title}
                        onChange={handleTitleChange}
                    />
                </div>

                <div className="my-3">
                    <label htmlFor="inputJourneyStart" className="form-label">開始日期</label>
                    <input type="date" className="form-control" id="inputJourneyStart" aria-describedby="inputJourneyStart"
                    />
                </div>
                <div className="my-3">
                    <label htmlFor="inputJourneyDays" className="form-label">行程天數</label>
                    <input type="number" className="form-control" id="inputJourneyDays" aria-describedby="inputJourneyDays"
                    />
                </div>
            </div>

            <div className='mb-3 p-3' style={calendarContainerStyle}>
                <div id="calendarEditContainer" ref={calendarEditViewRef}>

                </div>
            </div>


            <div id="newJourneyForm3" className='p-3 shadow bg-light' style={editFormStyle}>
                <div className="mb-3">
                    <div className="mb-3">
                        <div className="mb-1">加入圖片</div>
                        <label htmlFor="formFileMultiple" className="form-label">本機上傳</label>
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
                                        <img className='selectedImg w-100' src={image.url} alt={image.name} />
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
                                checked={journeyData.privacy === 1}
                                onChange={handlePrivacyChange} />
                            <label className="form-check-label" htmlFor="publicRadio">
                                公開
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="privacyRadio" value={0} id="privateRadio"
                                checked={journeyData.privacy === 0}
                                onChange={handlePrivacyChange} />
                            <label className="form-check-label" htmlFor="privateRadio">
                                不公開
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputNoteJourney" className="form-label">備註</label>
                        <textarea className="form-control" id="inputNoteJourney" rows="3"
                            value={journeyData.description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center my-5'>
                <button className='btn btn-primary mx-3' onClick={handleUpdateSubmit}>確定</button>
                <button className='btn btn-secondary mx-3' onClick={handleEditCancel}>取消</button>
            </div>
        </>
    )
}


const MyJourney = () => {




    const containerStyle = {
        minHeight: 'calc(100vh - 96px)',
    }


    const [journeyData, setJourneyData] = useState({
        title: "",
        userId: "",
        journeyStart: "",
        journeyEnd: "",
        journeyId: "",
        description: "",
        privacy: 0,
        thumbnailId: "",
        events: [],
        images: [],
        // imagesData: [],

    });

    const [uploadImg, setUploadImg] = useState({
        images: [],
        imagesData: [],
    })

    const [journeys, setJourneys] = useState([{
        journey_name: "123",
    }]);

    const [show, setShow] = useState(1);
    const [clickJourney, setClickJourney] = useState(0);

    useEffect(() => {
        const reqJourneysUrl = "http://localhost/TravelMaker/Backend/public/api/getJourneys";
        const userId = Cookies.get('userId');
        // const userId = 1;
        const reqParams = {
            user_id: userId
        }

        if (show !== 3) {
            axios.get(reqJourneysUrl, {
                params: reqParams
            })
                .then(response => {
                    setJourneys(response.data);
                    console.log("Journeys: ", response.data);
                })
                .catch((error) => {
                    console.error('Axios error:', error);
                });
        }


        // setShow(1);
        // setClickJourney(0);

    }, [show]);


    useEffect(() => {
        // const getEventUrl = `http://localhost/TravelMaker/Backend/public/api/getEvents`;


        // axios.get(getEventUrl, {
        //     params: {
        //         journey_id: clickJourney,
        //     }
        // })
        //     .then((response) => {
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(`HTTP error! Status: ${response.status}`);
        //         }
        //         return response;
        //     })
        //     .then(response => {
        //         const currentJourney = journeys.find(journey => journey.journey_id === clickJourney);

        //         if (currentJourney) {
        //             setJourneyData({
        //                 title: currentJourney.journey_name,
        //                 userId: currentJourney.user_id,
        //                 journeyStart: currentJourney.journey_start,
        //                 journeyEnd: currentJourney.journey_end,
        //                 journeyId: currentJourney.journey_id,
        //                 description: currentJourney.description,
        //                 privacy: currentJourney.privacy,
        //                 thumbnailId: currentJourney.thumbnail_id,
        //                 events: response.data,
        //             })
        //         }
        //         // console.log("Journey: ", response.data);
        //     })
        //     .catch((error) => {
        //         console.error('Axios error:', error);
        //     })

        // // get images API
        // const reqImgUrl = "http://localhost/TravelMaker/Backend/public/api/getJourneyImages";
        // axios.get(reqImgUrl, {
        //     params: {
        //         journey_id: clickJourney
        //     }
        // })
        //     .then(response => {
        //         setJourneyData((prevData) => ({
        //             ...prevData,
        //             images: response.data || []
        //         }))
        //         console.log(response.data);
        //     })
        //     .catch(error => console.error("Error: ", error));


        const getEventUrl = `http://localhost/TravelMaker/Backend/public/api/getEvents`;
        const reqImgUrl = "http://localhost/TravelMaker/Backend/public/api/getJourneyImages";

        Promise.all([
            axios.get(getEventUrl, {
                params: {
                    journey_id: clickJourney,
                },
            }),
            axios.get(reqImgUrl, {
                params: {
                    journey_id: clickJourney,
                },
            }),
        ])
            .then(([eventsResponse, imagesResponse]) => {
                if (eventsResponse.status < 200 || eventsResponse.status >= 300) {
                    throw new Error(`HTTP error! Status: ${eventsResponse.status}`);
                }

                const currentJourney = journeys.find(journey => journey.journey_id === clickJourney);
                if (currentJourney) {
                    setJourneyData(prevData => ({
                        ...prevData,
                        title: currentJourney.journey_name,
                        userId: currentJourney.user_id,
                        journeyStart: currentJourney.journey_start,
                        journeyEnd: currentJourney.journey_end,
                        journeyId: currentJourney.journey_id,
                        description: currentJourney.description,
                        privacy: currentJourney.privacy,
                        thumbnailId: currentJourney.thumbnail_id,
                        events: eventsResponse.data,
                        images: imagesResponse.data || [],
                    }));
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [clickJourney, journeys, show]);




    // set page title 
    const [pageTitle, setPageTitle] = useState("我的行程");

    // initialize calendar

    const calendarViewRef = useRef(null);
    const calendarEditViewRef = useRef(null);
    const calendarViewObj = useRef(null);
    const calendarEditViewObj = useRef(null);

    useEffect(() => {
        if (show === 2) {
            calendarViewObj.current = new Calendar(calendarViewRef.current, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin, interactionPlugin],
                initialView: 'timeGridWeek',
                initialDate: (journeyData.journeyStart === "" || null ? new Date() : journeyData.journeyStart),
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,listWeek'
                },
                themeSystem: 'bootstrap5',
                editable: false,
                events: journeyData.events.map((event) => ({
                    title: event.event_name,
                    start: new Date(event.start_time),
                    end: new Date(event.end_time),
                    description: event.event_description
                })),
            })

            calendarViewObj.current.render();
        }


        if (show === 3) {
            calendarEditViewObj.current = new Calendar(calendarEditViewRef.current, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin, interactionPlugin],
                initialView: 'timeGridWeek',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,listWeek'
                },
                initialDate: (journeyData.journeyStart === "" || null ? new Date() : journeyData.journeyStart),
                themeSystem: 'bootstrap5',
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true, // alternatively, use the `events` setting to fetch from a feed
                select: handleDateSelect,
                // select: handleOpenModal,
                eventClick: handleEventClick,
                initialEvents: journeyData.events.map((event) => ({
                    title: event.event_name,
                    start: new Date(event.start_time),
                    end: new Date(event.end_time),
                    description: event.event_description
                })),
            });

            calendarEditViewObj.current.render();

        }

    }, [show, journeyData.journeyId]);


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

    const linkStyle = {
        textDecoration: 'none',
    }




    return (
        <>
            <div className='container-fluid p-0 d-flex'>
                <Sidebar />
                <div className='container rounded my-4' style={containerStyle}>
                    <div className='d-flex align-items-end'>
                        <h1 className='mb-0'>{pageTitle}</h1>
                        {show === 1 && <div className='ms-auto'>
                            <Link to="/journey/newjourney" className='fs-4 add-journey-link' style={linkStyle}><i className="bi bi-plus-lg"></i><span className="ms-1">建立行程</span></Link>
                        </div>}
                    </div>
                    <hr></hr>
                    {show === 1 && <div className='container'>
                        <div className='row'>
                            {journeys.map((journey, index) => (
                                <JourneyThumbnail key={index} journey={journey} setShow={setShow} setClickJourney={setClickJourney} setPageTitle={setPageTitle} setJourneyData={setJourneyData} />
                            ))}
                            {/* <JourneyThumbnail /> */}
                            <AddNewJourney />
                        </div>
                    </div>}

                    {show === 2 && <JourneyDetail setShow={setShow} journeyData={journeyData} calendarViewRef={calendarViewRef} setPageTitle={setPageTitle} />}
                    {show === 3 && <JourneyEdit setShow={setShow} journeyData={journeyData} calendarEditViewRef={calendarEditViewRef} setJourneyData={setJourneyData} setPageTitle={setPageTitle} calendarEditViewObj={calendarEditViewObj} uploadImg={uploadImg} setUploadImg={setUploadImg} journeys={journeys} setJourneys={setJourneys} />}
                    <EventAddModal modalTitle={modalTitle} handleModalSave={handleModalSave} handleCloseModal={handleCloseModal} handleRemoveEvent={handleRemoveEvent} addEvent={addEvent} setAddEvent={setAddEvent} />
                </div>
            </div>
            <BotSidebar />
        </>
    )
}

export default withAuthorization(['user'])(MyJourney);