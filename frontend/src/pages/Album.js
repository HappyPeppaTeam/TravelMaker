import '../css/sidebar.css';
import '../css/album.css';
import React from 'react';
import AlbumModal from '../components/AlbumModal';
import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const {  useState, useRef, useEffect } = React;

const Album = () => {

    const [ albumList, setAlbumList ] = useState([]);
    const [ albumData, setAlbumData ] = useState([]);
    const albumModal = useRef(null);
    const token = 'fgvuhbhinhhpi-bb876';

    useEffect(() => {
        albumModal.current = new Modal('#albumModal',{
            backdrop: 'static',
        });
        
        (async() => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/albums/${token}`);
            const { data } = response.data;
            setAlbumList(data);
        })();
    },[])

    const openAlbumModal = (data) => {
        setAlbumData(data);
        albumModal.current.show();
    }

    const closeAlbumModal = () => {
        albumModal.current.hide();
    }

    return (
        <>
        <AlbumModal closeAlbumModal={closeAlbumModal} albumData={albumData}/>
        <div className="container-fluid shadow p-0 bg-white" id="body-container">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0" id="content-container">
                <div className="col-auto col-md-3 col-xl-2 d-none d-sm-block p-0">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-blue-1 align-items-center" id="sidebar-container"
                        style={{height: "100%", minHeight: "calc(100vh - 70px)"}}>
        
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white d-flex align-items-center sidebar-link"
                                    aria-current="page">
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
                                    className="nav-link text-white d-flex align-items-center sidebar-link" data-bs-toggle="collapse"
                                    role="button">
                                    <i className="bi bi-star-fill"></i>
                                    <span className="d-none d-sm-inline px-2">
                                        我的收藏
                                    </span>
                                </a>
        
                                <div className="collapse text-white" id="my-collection-submenu">
                                    <ul style={{listStyleType: "none", padding: 0}} className="d-flex align-items-center flex-column">
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

                <div className="flex-fill px-0 justify-content-center" id="content" style={{height: "100%", minHeight: "calc(100vh - 70px)"}}>
                    <div className='wrap m-5'>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h1 className='m-0'>相簿</h1>
                            <Link className='btn btn-outline-primary' to='/album/create'>建立新相簿</Link>
                        </div>
                        {/* 相簿總覽 */}
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                            { albumList.map((data) => {
                                return (
                                <div className="col" key={data.album_id}>
                                    <a href="#" className="albumLink" onClick={() => openAlbumModal(data)}>
                                        <div className="card m-2 album" style={{backgroundImage:`url(http://localhost/TravelMaker/Backend/public/storage/${data.photos[0].image_url})`}}>
                                            <div className="card-body albumBody">
                                                <h4 className="card-title albumTitle fw-bold text-white ps-3">{data.album_name}</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <div className="container-fluid bg-blue-1 shadow fixed-bottom d-flex d-sm-none align-items-center" style={{height: "50px"}}>
            <div className="w-100">
                <ul className="d-flex rm-ul-style justify-content-around" style={{listStyleType: "none"}} id="sidebarBottom">
                    <li>
                        <a href="#" className="nav-link text-white">
                            <i className="bi bi-person-vcard-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <i className="bi bi-envelope-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <i className="bi bi-calendar-week"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <i className="bi bi-image"></i>
                        </a>
                    </li>   
                    <li>
                        <a href="#" className="nav-link text-white">
                            <i className="bi bi-star-fill"></i>
                        </a>
                    </li>   
                </ul>
            </div>
        </div>
        </>
    )
}

export default Album;