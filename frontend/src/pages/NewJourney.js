import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';
import 'bootstrap';
import '../css/newJourney.css'
import CalendarNew from '../components/CalenderNew';

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
    }

    const browseTextContainerStyle = {
        height: '300px',
        border: 'lightgrey solid',
    }

    const browseImageContainerStyle = {
        height: '200px',
        border: 'lightcoral solid,'
    }


    const tabs = useRef(null);
    const prevButton = useRef(null);
    const nextButton = useRef(null);
    const progressBar = useRef(null);

    useEffect(() => {
        tabs.current = document.getElementsByClassName("tab");
        prevButton.current = document.getElementById("prevButton");
        nextButton.current = document.getElementById("nextButton");
        progressBar.current = document.getElementById("progressBar");
        showTab(currentTab);
    }, [])


    let currentTab = 0;

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
            nextButton.current.getElementsByTagName("span")[0].innerText = "完成";
            nextButton.current.setAttribute('type', 'submit');
    
        } else {
            nextButton.current.getElementsByTagName("span")[0].innerText = "下一步";
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

        setCurTab(currentTab);
        showTab(currentTab);
    }

    const [curtab, setCurTab] = useState(0);
    


    
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
                                            placeholder="ex. 金瓜石兩日遊" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputJourneyDestination" className="form-label">行程目的地</label>
                                        <input type="text" className="form-control" id="inputJourneyDestination"
                                            aria-describedby="inputJourneyDestination" placeholder="ex. 台北" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputJourneyStart" className="form-label">開始日期</label>
                                        <input type="date" className="form-control" id="inputJourneyStart" aria-describedby="inputJourneyStart" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputJourneyDays" className="form-label">行程天數</label>
                                        <input type="number" className="form-control" id="inputJourneyDays" aria-describedby="inputJourneyDays" />
                                    </div>
                                </div>

                                <div id="newJourneyForm2" className="tab">
                                    <div id="calendarContainer" className="w-100 mb-3 p-3 rounded shadow" style={calendarContainerStyle}>
                                        <CalendarNew />
                                    </div>
                                    <div id="mapContainer" className="w-100" style={mapContainerStyle}>Map</div>
                                </div>

                                <div id="newJourneyForm3" className="tab">
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <div className="mb-1">加入圖片</div>
                                            <label htmlFor="formFileMultiple" className="form-label">本機上傳</label>
                                            <input className="form-control mb-2" type="file" id="formFileMultiple" multiple />

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
                                            <textarea className="form-control" id="inputNoteJourney" rows="3"></textarea>
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
                                    <div id="browseTextContainer" className="w-100 mb-3" style={browseTextContainerStyle}>
                                        <h2>Note</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus in provident vitae id?
                                            Repudiandae sit maiores expedita. Veniam nulla, atque, expedita pariatur natus, debitis at explicabo
                                            consectetur nobis sequi perferendis?
                                            Necessitatibus culpa perspiciatis aut. Eaque corporis ullam porro, provident modi voluptatibus
                                            praesentium amet aliquam veritatis cum ipsam hic impedit dicta sint dolorem iure excepturi aut unde
                                            exercitationem libero officia possimus?</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BotSidebar />
        </div>
    );
}

export default NewJourney;