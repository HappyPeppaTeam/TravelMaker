import '../css/sidebar.css';
import '../css/album.css';
import Sidebar from '../components/Sidebar';
import React from 'react';
import AlbumModal from '../components/AlbumModal';
import { Modal, Dropdown } from 'bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const {  useState, useRef, useEffect } = React;

const Album = () => {

    const [ albumList, setAlbumList ] = useState([]);
    const [ albumData, setAlbumData ] = useState([]);
    const [ allAlbums, setAllAlbums ] = useState([]);
    const albumModal = useRef(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const token = Cookies.get('token');
    
    useEffect(() => {
        albumModal.current = new Modal('#albumModal',{
            backdrop: 'static',
        });
        (async() => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/albums/${token}`);
            const { data } = response.data;
            setAlbumList(data);
            setAllAlbums(data);
        })();
    },[])

    const handleDropDown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const openAlbumModal = (data) => {
        setAlbumData(data);
        albumModal.current.show();
    }

    const closeAlbumModal = () => {
        albumModal.current.hide();
    }

    const deleteAllAlbum = async () => {
        await axios.delete(`http://localhost/TravelMaker/Backend/public/api/albums/${token}`)
        .then(() => alert('成功刪除所有相簿!'))
        window.location.reload();
    }

    const selectTag = (tag) => {
        if( tag === "全部") {
            setAlbumList(allAlbums);
        }else {
            const selectData = allAlbums.filter((data) => data.tag === tag);
            setAlbumList(selectData);
        }
    }

    return (
        <>
        <AlbumModal closeAlbumModal={closeAlbumModal} albumData={albumData}/>
        <div className="container-fluid shadow p-0 bg-white" id="body-container">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0" id="content-container">
                <Sidebar Album="active"></Sidebar>
                <div className="flex-fill px-0 justify-content-center" id="content" style={{height: "100%", minHeight: "calc(100vh - 70px)"}}>
                    <div className='wrap m-5'>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h1 className='m-0'>我的相簿</h1>
                                <div className="dropdown mt-3 d-md-none">
                                    <button className="btn btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton" aria-expanded="false" onClick={handleDropDown}>
                                        分類
                                    </button>
                                    <ul className={`dropdown-menu${dropdownVisible ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                                        <li onClick={() => selectTag('全部')}><a className="dropdown-item" href="#">全部</a></li>
                                        { allAlbums.map((data,index) => {
                                            return (
                                                <li key={index} onClick={() => selectTag(data.tag)}><a className="dropdown-item" href="#">{data.tag}</a></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className='d-flex flex-column flex-md-row'>
                                <div className="dropdown d-none d-md-block">
                                    <button className="btn btn-secondary dropdown-toggle ms-2" type="button" id="dropdownMenuButton" aria-expanded="false" onClick={handleDropDown}>
                                        分類
                                    </button>
                                    <ul className={`dropdown-menu${dropdownVisible ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                                        <li onClick={() => selectTag('全部')}><a className="dropdown-item" href="#">全部</a></li>
                                        { allAlbums.map((data,index) => {
                                            return (
                                                <li key={index} onClick={() => selectTag(data.tag)}><a className="dropdown-item" href="#">{data.tag}</a></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <Link className='btn btn-outline-primary ms-2 mb-2 mb-md-0' to='/album/create'>建立新相簿</Link>
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
                                                <h4 className="card-title albumTitle fw-bold ps-3">{data.album_name}</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                )
                            })}
                            <div className="col">
                                <Link to='/album/create' className='albumLink'>
                                    <div className="card m-2 album">
                                        <div className="card-body addNewAlbum d-flex align-items-center justify-content-center">
                                            <i className="bi bi-plus-lg plusIcon"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
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