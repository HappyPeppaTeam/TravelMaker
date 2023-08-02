import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';

import '../css/journey.css';
import JourneyThumbnail from '../components/JourneyThumbnail';
import Sidebar from '../components/Sidebar';
import BotSidebar from '../components/BotSidebar';



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


const JourneyModel = ({ handleCloseModal }) => {

    const modalHeaderStyle = {
        height: '200px',
        backgroundImage: 'url(../images/street.jpg)',
        backgroundSize: 'cover',
    }

    const mapContainerStyle = {
        width: '100%',
        height: '500px',
        border: 'lightblue solid',
    }

    const imageContainerStyle = {
        width: '100%',
        height: '200px',
    }

    const journeyContainerStyle = {
        width: '100%',
        minHeight: '500px',
        background: 'linear-gradient(135deg, rgba(235,244,245,0.5) 57%, rgba(181,198,224,0.5) 100%)',
    }

    const [journeyData, setJourneyData] = useState({
        title: "Taiwan number one",
        textContent: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, recusandae? Veniam, error?",
        images: {
            1: "../images/street.jpg",
            2: "../images/street.jpg",
            3: "../images/street.jpg",
        }
    });

    return (
        <div className="modal fade" id="journeyModal" tabIndex="-1" aria-labelledby="journeyModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-xl modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-header"
                        style={modalHeaderStyle}>
                        <h1 className="modal-title fs-5 align-self-end text-white" id="journeyModalLabel">Modal title</h1>
                        <button type="button" className="btn-close btn-close-white align-self-start" onClick={handleCloseModal}
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div id="journeyRegView" className="">
                            <div id="contentHeader" className="d-flex align-items-center">
                                <h1>{journeyData.title}</h1>
                                <div className="h5 ms-auto active-text"><i className="bi bi-pencil-square"></i><span
                                    className="ms-2">編輯</span></div>
                            </div>
                            <div id="journeyContainer" className="p-3 rounded shadow" style={journeyContainerStyle}>

                            </div>
                            <div id="mapContainer" style={mapContainerStyle} className="mt-3">
                            </div>

                            <div className="h2 mt-3">備註</div>
                            <div id="text-content" className="mt-3">
                                {journeyData.textContent}
                            </div>
                            <div className="h2 mt-3">相片</div>
                            <div id="imageContainer" className="mt-3 image-overflow rounded shadow"
                                style={imageContainerStyle}>
                                <img src="../images/street.jpg" alt="" className="h-100" />
                                <img src="../images/street.jpg" alt="" className="h-100" />
                                <img src="../images/street.jpg" alt="" className="h-100" />
                                <img src="../images/street.jpg" alt="" className="h-100" />
                                <img src="../images/street.jpg" alt="" className="h-100" />
                                <img src="../images/street.jpg" alt="" className="h-100" />
                                <img src="../images/street.jpg" alt="" className="h-100" />
                                <img src="../images/street.jpg" alt="" className="h-100" />
                            </div>
                        </div>

                        <form className='d-none' id="journeyEditView">
                            <div class="mb-3">
                                <label for="#editJourneyTitle" class="form-label">行程名稱</label>
                                <input type="text" class="form-control" id="editJourneyTitle" value={journeyData.title} />
                            </div>

                            <div class="mb-3">
                                <label for="#editJourneyDescription" class="form-label">備註</label>
                                <textarea class="form-control" id="editJourneyDescription" rows="3" value={journeyData.textContent}></textarea>
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



function Journey() {


    const [journeyData, setJourneyData] = useState({
        journeys: [
            {
                id: 1,
                title: 'Trip to Taipei',
                description: 'plan to stay from 5/23 to 5/25',
                editTime: '2023/4/5 13:00',
                journeyEvents: [
                    {
                        id: 1,
                        name: 'breakfast',
                        description: 'McDonald',
                        start: '2023/5/23 8:00',
                        end: '2023/5/23 9:00',
                    },
                    {
                        id: 2,
                        name: 'lunch',
                        description: 'McDonald',
                        start: '2023/5/23 12:00',
                        end: '2023/5/23 13:00',
                    },
                ],

                images: [
                    {
                        image_id: 1,
                        data: '../images/street.jpg',
                    },
                    {
                        image_id: 2,
                        data: '../images/street.jpg',
                    },
                ]
            },
            {
                id: 3,
                title: 'Trip to Taichung',
                description: 'plan to stay from 5/26 to 5/27',
                editTime: '2023/4/5 13:00',
                journeyEvents: [
                    {
                        id: 4,
                        name: 'breakfast',
                        description: 'McDonald',
                        start: '2023/5/26 8:00',
                        end: '2023/5/26 9:00',
                    },
                    {
                        id: 6,
                        name: 'lunch',
                        description: 'McDonald',
                        start: '2023/5/27 12:00',
                        end: '2023/5/27 13:00',
                    },
                ],

                images: [
                    {
                        image_id: 4,
                        data: '../images/street.jpg',
                    },
                    {
                        image_id: 5,
                        data: '../images/street.jpg',
                    },
                ]
            },
        ],
    });

    const journeyModalRef = useRef(null);

    useEffect(() => {
        journeyModalRef.current = new Modal('#journeyModal');
        // moreDropdown.current = document.getElementById('moreDropdown');
        // handleCloseDropdown();
    }, [])

    const handleOpenModal = () => {
        journeyModalRef.current.show();
    }

    const handleCloseModal = () => {
        journeyModalRef.current.hide();
    }



    return (
        <div className="container-lg shadow p-0 mb-3 bg-white" id="bodyContainer">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0 bg-white" id="contentContainer">
                <Sidebar />

                {/* <!-- main content --> */}
                <div className="flex-fill px-0 justify-content-center" id="content">
                    <div className="m-5">
                        <div className="d-flex align-items-end">

                            <Link to="/journey" className="h1 rm-link-style">我的行程</Link>

                            <Link to="/journey/newjourney" className="h5 ms-auto active-text add-new-journey" style={{ textDecoration: 'none' }}><i className="bi bi-plus-lg"></i><span className="ms-1">建立行程</span>
                            </Link>
                        </div>
                        <hr />
                        <div className="container-fluid">
                            <div className="row">
                                {/* {journeyData.journeys.map((journey) => {journey.images})} */}
                                <JourneyThumbnail key={1} handleOpenModal={handleOpenModal} />
                                {/* <JourneyThumbnail key={2} handleOpenModal={handleOpenModal} />
                                <JourneyThumbnail key={3} handleOpenModal={handleOpenModal} />
                                <JourneyThumbnail key={4} handleOpenModal={handleOpenModal} />
                                <JourneyThumbnail key={5} handleOpenModal={handleOpenModal} />
                                <JourneyThumbnail key={6} handleOpenModal={handleOpenModal} />
                                <JourneyThumbnail key={7} handleOpenModal={handleOpenModal} />
                                <JourneyThumbnail key={8} handleOpenModal={handleOpenModal} />
                                <JourneyThumbnail key={9} handleOpenModal={handleOpenModal} /> */}
                                <AddNewJourney />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BotSidebar />
            <JourneyModel handleCloseModal={handleCloseModal} />
            {/* <MoreDropDown handleOpenModal={handleOpenModal}/> */}
        </div>
    );
}

export default Journey;