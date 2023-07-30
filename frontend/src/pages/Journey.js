import React from 'react';
import '../css/scheduleStyles.css';
import JourneyThumbnail from '../components/JourneyThumbnail';

function Journey() {

    const sideBarStyle = {
        height: '100%',
        minHeight: 'calc(100vh - 70px)',
    }

    const removeListDefault = {
        listStyleType: 'none',
    }

    return (
        <div className="container-fluid shadow p-0  mx-0 mb-3 bg-white" id="bodyContainer">
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
                            <a href="" className="rm-link-style">
                                <div className="h1">我的行程</div>
                            </a>

                            <div className="h5 ms-auto active-text add-new-journey"><i className="bi bi-plus-lg"></i><span className="ms-1">建立行程</span>
                            </div>
                        </div>
                        <hr/>
                            <div className="container-fluid">
                                <div className="row">
                                    <JourneyThumbnail />
                                    <JourneyThumbnail />
                                    <JourneyThumbnail />
                                    <JourneyThumbnail />
                                    <JourneyThumbnail />
                                    <JourneyThumbnail />
                                    <JourneyThumbnail />
                                    <JourneyThumbnail />
                                    <JourneyThumbnail />
                                    {/* <div className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center dropdown"
                                        type="button" id="journey1">

                                        <div className="rounded shadow"
                                            style="background-image: url(./src/images/street.jpg); background-size: cover; height: 200px; width: 100%;">
                                            <div className="overlay rounded d-flex justify-content-center align-items-center position-relative"
                                                id="overlay">
                                                <div className="position-absolute top-0 end-0 p-1 m-3 rounded" id="moreDetail"
                                                    style="height: 2rem; width: 2rem;">
                                                    <i
                                                        className="bi bi-three-dots text-secondary fs-5 position-absolute top-50 start-50 translate-middle"></i>
                                                </div>
                                                <div>金瓜石之旅</div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div
                                        className="col-md-6 col-lg-4 col-xl-3 p-2 d-flex align-items-center justify-content-center">
                                        <div style={{
                                            width: '100%',
                                            height:'200px',
                                            backgroundColor:'gray',
                                        }}
                                            className="d-flex align-items-center justify-content-center rounded shadow add-new-journey"
                                            id="addNewBox">
                                            <i className="bi bi-plus-lg" style={{
                                                fontSize: '2rem', 
                                                color: '#2F4E63',
                                            }}></i>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Journey;