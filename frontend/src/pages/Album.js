import '../css/sidebar.css';
import '../css/album.css';
import Sidebar from '../components/Sidebar';
import React from 'react';
import AlbumModal from '../components/AlbumModal';
import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const {  useState, useRef, useEffect } = React;

const Album = () => {

    const [ albumList, setAlbumList ] = useState([]);
    const [ albumData, setAlbumData ] = useState([]);
    const albumModal = useRef(null);
    const token = Cookies.get('token');

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

    const deleteAllAlbum = async () => {
        const token = 'fgvuhbhinhhpi-bb876';
        await axios.delete(`http://localhost/TravelMaker/Backend/public/api/albums/${token}`)
        .then(() => alert('成功刪除所有相簿!'))
        window.location.reload();
    }

    return (
        <>
        <AlbumModal closeAlbumModal={closeAlbumModal} albumData={albumData}/>
        <div className="container-fluid shadow p-0 bg-white" id="body-container">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0" id="content-container">
                <Sidebar></Sidebar>
                <div className="flex-fill px-0 justify-content-center" id="content" style={{height: "100%", minHeight: "calc(100vh - 70px)"}}>
                    <div className='wrap m-5'>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h1 className='m-0'>相簿</h1>
                            <div>
                                <Link className='btn btn-outline-primary' to='/album/create'>建立新相簿</Link>
                                <button className='btn btn-outline-danger ms-2' onClick={deleteAllAlbum}>刪除所有相簿</button>
                            </div>
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