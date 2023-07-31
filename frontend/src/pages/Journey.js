import React, { useState, useRef, useEffect } from 'react';
import { Modal } from 'bootstrap';

import '../css/journey.css';
import JourneyThumbnail from '../components/JourneyThumbnail';



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
        <div
            className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center">
            <div style={addNewThumbnailStyle}
                className="d-flex align-items-center justify-content-center rounded shadow add-new-journey"
                id="addNewBox">
                <i className="bi bi-plus-lg" style={plusIconStyle}></i>
            </div>
        </div>
    )
}

const MyJourneyModal = ({showModal, journeyModalRef, setShowModal}) => {

    const [currentJourney, setCurrentJourney] = useState(
        {
            journeyTitle: '台北之旅',
            textContent: '台北好好玩',
            images: {
                1: '../images/street.jpg',
                2: '../images/street.jpg',
                3: '../images/street.jpg',
            },
        }
    );

    useEffect(() => {
        if (showModal) {
            if (journeyModalRef.current) {
                if (journeyModalRef) {
                    const journeyModel = new Modal(journeyModalRef.current);
                    journeyModel.show();
                }
            }
        }
        else {
            if (journeyModalRef.current) {
                const journeyModel = new Modal(journeyModalRef.current);
                journeyModel.hide();
                return (() => setShowModal(false))
            }
        }
    }, [showModal, journeyModalRef]);

    const modelHeaderStyle = {
        height: '200px',
        backgroundImage: 'url(../images/street.jpg)',
        backgroundSize: 'cover',
    }

    const journeyContainerStyle = {
        width: '100%',
        minHeight: '500px',
        background: 'linear-gradient(135deg, rgba(235,244,245,0.5) 57%, rgba(181,198,224,0.5) 100%)',
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

    return (
        <div class="modal fade" id="journeyModal" tabIndex="-1" aria-labelledby="journeyModalLabel" aria-hidden="true" ref={journeyModalRef}>
            <div class="modal-dialog modal-dialog-scrollable modal-xl modal-fullscreen-lg-down">
                <div class="modal-content">
                    <div class="modal-header"
                        style={modelHeaderStyle}>
                        {/* <h1 class="modal-title fs-5 align-self-end text-white" id="journeyModalLabel">Modal title</h1> */}
                        <button type="button" class="btn-close btn-close-white align-self-start" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="journeyRegView" class="">
                            <div id="contentHeader" class="d-flex align-items-center">
                                <h1>Model</h1>
                                <div class="h5 ms-auto active-text"><i class="bi bi-pencil-square"></i><span
                                    class="ms-2">編輯</span></div>
                            </div>
                            <div id="journeyContainer" class="p-3 rounded shadow" style={journeyContainerStyle}>

                            </div>
                            <div id="mapContainer" class="mt-3" style={mapContainerStyle} >
                            </div>

                            <div class="h2 mt-3">備註</div>
                            <div id="textContent" class="mt-3">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, recusandae? Veniam, error
                                iure et voluptas quae enim! Amet consequuntur dolorum odit, vero nulla mollitia suscipit libero,
                                iste ullam, inventore quisquam?
                                Saepe doloremque labore rem cum reprehenderit totam, maxime eaque. Repudiandae maiores eligendi
                            </div>
                            <div class="h2 mt-3">相片</div>
                            <div id="imageContainer" class="mt-3 image-overflow rounded shadow"
                                style={imageContainerStyle}>
                                <img src="./src/images/street.jpg" alt="" class="h-100" />
                                <img src="./src/images/street.jpg" alt="" class="h-100" />
                                <img src="./src/images/street.jpg" alt="" class="h-100" />
                                <img src="./src/images/street.jpg" alt="" class="h-100" />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



function Journey() {

    const sideBarStyle = {
        height: '100%',
        minHeight: 'calc(100vh - 70px)',
    }

    const removeListDefault = {
        listStyleType: 'none',
    }


    const journeyModalRef = useRef(null);
    const [showModal, setShowModal] = useState(false);


    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }



    return (
        <div className="container-lg shadow p-0 mb-3 bg-white" id="bodyContainer">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0 bg-white" id="contentContainer">

                {/* <!-- side bar --> */}
                <div className="col-auto col-md-3 col-xl-2 d-none d-sm-block p-0">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-blue-1 align-items-center" id="sidebarContainer"
                        style={sideBarStyle}>

                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link">
                                    <i className="bi bi-person-vcard-fill"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        基本資料
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link">
                                    <i className="bi bi-envelope-fill"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的信箱
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link">
                                    <i className="bi bi-calendar-week"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的行程
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link">
                                    <i className="bi bi-image"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的相簿
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#my-collection-submenu"
                                    className="nav-link text-white d-flex align-items-center sidebar-link"
                                    data-bs-toggle="collapse" role="button">
                                    <i className="bi bi-star-fill"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的收藏
                                    </span>
                                </a>

                                <div className="collapse text-white" id="my-collection-submenu">
                                    <ul style={removeListDefault}
                                        className="d-flex align-items-center flex-column p-0">
                                        <li>
                                            <a href="#" className="nav-link px-0">
                                                <i className="bi bi-stack"></i>
                                                <span className="d-none d-sm-inline ms-1">全部</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0">
                                                <i className="bi bi-calendar-heart"></i>
                                                <span className="d-none d-sm-inline ms-1">行程</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0">
                                                <i className="bi bi-camera"></i>
                                                <span className="d-none d-sm-inline ms-1">景點</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0 ">
                                                <i className="bi bi-cup-straw"></i>
                                                <span className="d-none d-sm-inline ms-1">餐廳</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- main content --> */}
                <div className="flex-fill px-0 justify-content-center" id="content">
                    <div className="m-5">
                        <div className="d-flex align-items-end">
                            <a href="#" className="rm-link-style">
                                <div className="h1">我的行程</div>
                            </a>

                            <div className="h5 ms-auto active-text add-new-journey"><i className="bi bi-plus-lg"></i><span className="ms-1">建立行程</span>
                            </div>
                        </div>
                        <hr />
                        <div className="container-fluid">
                            <div className="row">
                                <JourneyThumbnail key={1} onClick={handleShowModal} />
                                <JourneyThumbnail key={2} />
                                <JourneyThumbnail key={3} />
                                <JourneyThumbnail key={4} />
                                <JourneyThumbnail key={5} />
                                <JourneyThumbnail key={6} />
                                <JourneyThumbnail key={7} />
                                <JourneyThumbnail key={8} />
                                <JourneyThumbnail key={9} />
                                <AddNewJourney />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyJourneyModal journeyModalRef={journeyModalRef} showModal={showModal} setShowModal={setShowModal}/>
        </div>
    );
}

export default Journey;