import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';
import 'bootstrap';
import '../css/newJourney.css'
import CalendarNew from '../components/CalenderNew';
import { Link } from 'react-router-dom';
import moment from 'moment';



// function useImages() {
//     const inputRef = useRef(null);
//     const [images, setImages] = useState([]);

//     const handleUpload = (event) => {
//         const images = [...event.target.files].map((file) => {
//             return {
//                 name: file.name,
//                 url: URL.createObjectURL(file),
//             }
//         })
//         setImages(images)
//     }

//     const handleRemove = (itemIndex) => {
//         setImages((prev) => prev.filter((img, index) => {
//             if (index === itemIndex) {
//                 URL.revokeObjectURL(img.url)
//             }
//             return index !== itemIndex;
//         }))
//     }

//     const handleRemoveAll = (e) => {
//         e.preventDefault();
//         images.forEach((img) => {
//             URL.revokeObjectURL(img.url);
//         });
//         setImages([]);
//     }

//     useEffect(() =>{
//         if (images.length === 0) {
//             if (inputRef.current) {
//                 inputRef.current.value = "";
//             }
//         }
//     }, [images])

//     return {
//         images, 
//         handleUpload,
//         handleRemove,
//         handleRemoveAll,
//         inputRef,
//     }
// }


function NewJourney() {

    const progressBarWidthStyle = {
        width: "50%",
    }

    const progressBarHeightStyle = {
        height: '2px',
    }

    const contentContainerStyle = {
        height: '100%',
        minHeight: 'calc(100vh - 70px)',
    }

    const mapContainerStyle = {
        height: '300px',
        border: 'lightblue solid',
        display: 'none',
    }

    const calendarContainerStyle = {
        width: '100%',
        minHeight: '500px',
        background: 'linear-gradient(135deg, rgba(235,244,245,0.5) 57%, rgba(181,198,224,0.5) 100%)',
    }

    const imageContainerStyle = {
        height: '300px',
        border: 'lightgrey solid',
    }

    const browseCalendarContainerStyle = {
        height: '500px',
        border: 'grey solid',
    }

    const browseMapContainerStyle = {
        height: '300px',
        border: 'lightblue solid',
        display: 'none',
    }

    const browseTextContainerStyle = {
        minHeight: '300px',
        background: 'linear-gradient(142deg, rgba(0,212,255,0.2) 83%, rgba(14,14,134,0.2) 100%)',
    }

    const browseImageContainerStyle = {
        height: '200px',
        border: 'lightcoral solid,'
    }


    const tabs = useRef(null);
    const prevButton = useRef(null);
    const nextButton = useRef(null);
    const progressBar = useRef(null);
    const newCalenderRef = useRef(null);
    const completeButtonRef = useRef(null);

    let currentTab = 0;

    useEffect(() => {
        tabs.current = document.getElementsByClassName("tab");
        prevButton.current = document.getElementById("prevButton");
        nextButton.current = document.getElementById("nextButton");
        progressBar.current = document.getElementById("progressBar");
        // currentTab = 0;
        showTab(currentTab);
    }, [])




    const showTab = (n) => {

        // set progress bar
        let progressPercent = (100 / tabs.current.length) * (n + 1);
        progressBar.current.setAttribute("style", `width: ${progressPercent}%`);

        tabs.current[n].style.display = "block";

        if (n === 0) {
            prevButton.current.style.display = "none";
        } else {
            prevButton.current.style.display = "block";
        }

        if (n === tabs.current.length - 1) {
            // nextButton.current.getElementsByTagName("span")[0].innerText = "完成";
            // nextButton.current.setAttribute('type', 'submit');
            nextButton.current.style.display = 'none';
            completeButtonRef.current.style.display = 'block';

        } else {
            nextButton.current.getElementsByTagName("span")[0].innerText = "下一步";
            nextButton.current.style.display = 'block';
            completeButtonRef.current.style.display = 'none';
        }

    }

    function nextPrev(n) {
        tabs.current[currentTab].style.display = "none";
        currentTab += n;

        // for testing : return to first page after finished form 
        if (currentTab >= tabs.current.length || currentTab < 0) {
            currentTab = 0;
            // return false;
        }

        // setCurTab(currentTab);
        showTab(currentTab);
        if (currentTab === 1) {
            newCalenderRef.current.getApi().render();
        }
    }

    const addDays = (date, days) => {
        date.setDate(date.getDate() + days);
        return date;
    }


    // const { images, handleUpload, handleRemove, handleRemoveAll,inputRef } = useImages();

    // const handleImageUpload = () => {
    //     const { images, handleUpload, handleRemove, inputRef } = useImages(null);
    // }


    const [newJourney, setNewJourney] = useState({
        title: "",
        description: "",
        destination: "",
        userId: 0,
        privacy: 0,
        thumbnailId: 0,
        journeyStart: new Date(),
        journeyEnd: new Date(),
        events: [],
    });

    const [newEvents, setNewEvents] = useState([]);


    const handleTitle = (e) => {
        setNewJourney((prevJourney) => ({
            ...prevJourney,
            journey_name: e.target.value,
        }));
    }

    const handleDescription = (e) => {
        setNewJourney((prevJourney) => ({
            ...prevJourney,
            description: e.target.value,
        }))
    }

    const handleDestination = (e) => {
        setNewJourney((prevJourney) => ({
            ...prevJourney,
            destination: e.target.value,
        }))
    }

    const handleStartDate = (e) => {

        setNewJourney((prevJourney) => ({
            ...prevJourney,
            journeyStart: e.target.value,
        }))
    }

    const handleEndDate = (e) => {
        setNewJourney((prevJourney) => ({
            ...prevJourney,
            journeyEnd: moment(prevJourney.journeyStart).add(e.target.value, 'm')
        }))
    }






    return (
        <div className="container-lg shadow p-0 mb-3 bg-white" id="bodyContainer">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0 bg-white" id="contentContainer">
                <Sidebar />
                <div className="flex-fill px-0 justify-content-center" id="contentContainer"
                    style={contentContainerStyle}>
                    <div className="m-5">
                        <div className="d-flex align-items-end">
                            <a href="" className="rm-link-style">
                                <div className="h1">
                                    建立行程 <span className="d-none">- 金瓜石之旅</span>
                                </div>
                            </a>
                        </div>
                        <div className="progress my-3" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
                            aria-valuemax="100" style={progressBarHeightStyle}>
                            <div className="progress-bar" id="progressBar" style={progressBarWidthStyle}></div>
                        </div>
                        <div className="container px-0">
                            <form id="newJourneyForm" method='post'>
                                <div id="newJourneyForm1" className="tab">
                                    <div className="mb-3">
                                        <label htmlFor="inputJourneyName" className="form-label">行程名稱</label>
                                        <input type="text" className="form-control" id="inputJourneyName" aria-describedby="inputJourneyName"
                                            placeholder="ex. 金瓜石兩日遊" onChange={handleTitle} />
                                        {/* {console.log(newJourney)} */}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputJourneyDestination" className="form-label">行程目的地</label>
                                        <input type="text" className="form-control" id="inputJourneyDestination"
                                            aria-describedby="inputJourneyDestination" placeholder="ex. 台北" onChange={handleDestination} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputJourneyStart" className="form-label">開始日期</label>
                                        <input type="date" className="form-control" id="inputJourneyStart" aria-describedby="inputJourneyStart" onChange={handleStartDate} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputJourneyDays" className="form-label">行程天數</label>
                                        <input type="number" className="form-control" id="inputJourneyDays" aria-describedby="inputJourneyDays" onChange={handleEndDate} />
                                    </div>
                                </div>

                                <div id="newJourneyForm2" className="tab">
                                    <div id="calendarContainer" className="w-100 mb-3 p-3 rounded shadow" style={calendarContainerStyle}>
                                        <CalendarNew newCalenderRef={newCalenderRef} setNewEvents={setNewEvents} setNewJourney={setNewJourney} newJourney={newJourney} />
                                    </div>
                                    <div id="mapContainer" className="w-100" style={mapContainerStyle}>Map</div>
                                </div>

                                <div id="newJourneyForm3" className="tab">
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

                                            <div className="container-fluid mt-3" id='imageContainer' style={imageContainerStyle}></div>
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
                                            <textarea className="form-control" id="inputNoteJourney" rows="3" onChange={handleDescription}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div id="newJourneyBrowse" className="tab">
                                    <div id="browseCalendarContainer" className="w-100 mb-3" style={browseCalendarContainerStyle}>
                                        <h2>Calendar</h2>
                                    </div>
                                    <div id="browseMapContainer" className="w-100 mb-3" style={browseMapContainerStyle}>
                                        <h2>Map</h2>
                                    </div>
                                    <div id="browseTextContainer" className="w-100 mb-3 rounded shadow" style={browseTextContainerStyle}>
                                        <div className='p-3'>
                                            <h2>備註</h2>
                                            <p>{newJourney.description}</p>
                                        </div>
                                    </div>
                                    <div id="browseImageContainer" className="w-100 mb-3" style={browseImageContainerStyle}>
                                        <h2>Image</h2>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-5 d-flex">
                                <button className="active-text btn btn-light" id="prevButton" onClick={() => nextPrev(-1)}>
                                    <i className="bi bi-arrow-left"></i><span className="ps-1">上一步</span>
                                </button>
                                <button className="ms-auto active-text btn btn-light" id="nextButton" onClick={() => nextPrev(1)}>
                                    <span className="pe-1" id="nextStepText">下一步</span><i className="bi bi-arrow-right" id="nextStepIcon"></i>
                                </button>
                                <Link to="/journey" className="ms-auto active-text btn btn-light" id="nextButton" style={{ display: 'none' }} ref={completeButtonRef}>
                                    <span className="pe-1" id="nextStepText">完成</span><i className="bi bi-arrow-right" id="nextStepIcon"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BotSidebar />
            {console.log(newEvents)}
        </div>
    );
}

export default NewJourney;