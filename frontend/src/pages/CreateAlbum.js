import '../css/sidebar.css';
import '../css/createAlbum.css';
import React from 'react';

const { useState, useRef, useEffect } = React;

function useImage() {
    const inputRef = useRef(null);
    const [images, setImages] = useState([]);
  
    // 上傳圖片
    const handleUpload = (e) => {
      const images = [...e.target.files].map((file) => {
        return {
        name: file.name,
        url: URL.createObjectURL(file),
        }
      });
      setImages(images);
    }
  
    // 移除單一圖片
    const handleRemove = (e,imgIndex) => {
        e.preventDefault();
        setImages(images.filter((img,index) => {
            if(index === imgIndex) {
                URL.revokeObjectURL(img.url);
            }
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
    }

    useEffect(() => {
        if(images.length === 0 && inputRef.current){
            inputRef.current.value = "";
        }
    },[images])
  
    return {
      images,
      handleUpload,
      handleRemove,
      handleRemoveAll,
      inputRef,
    }
}

const Album = () => {
    const { images, handleUpload, handleRemove, handleRemoveAll, inputRef } = useImage();

    return (
        <>
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
                        <h1>建立相簿</h1>

                        <form action="" id="newJourneyForm1" className="tab mt-4">

                            <div className="mb-3">
                                <label htmlFor="albumName" className="form-label fs-4">相簿名稱</label>
                                <input type="text" className="form-control" id="albumName"
                                    aria-describedby="albumName" placeholder="如 : 金瓜石兩日遊" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="albumSort" className="form-label fs-4">分類</label>
                                <input type="text" className="form-control" id="albumSort"
                                    aria-describedby="albumSort" placeholder="如 : 台北" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="note" className="form-label fs-4">備註</label>
                                <textarea className="form-control" id="note" rows="5"></textarea>
                            </div>

                            <label htmlFor="file-input">
                                <p className='fs-4 mb-2'>選擇相片</p>
                                <input
                                    type="file"
                                    id="file-input"
                                    accept="image/*"
                                    className="d-none ab"
                                    multiple
                                    onChange={handleUpload}
                                    ref={inputRef}
                                />
                                <span className='btn btn-outline-primary me-2'>上傳圖片</span>
                            </label>
                            <span className='btn btn-outline-danger' onClick={(e) => handleRemoveAll(e)}>移除全部圖片</span>

                            <div className='row row-cols-2 row-cols-lg-3 mt-3 g-3'>
                                {images.map((image,index) => {
                                    return (
                                    <div className='col' key={index}>
                                        <img className='selectedImg w-100' src={image.url} />
                                        <div className='imgInfo'>
                                            <div className='fileName w-100 d-flex justify-content-between align-items-center'>
                                                <p className='m-0 py-2 text-white text-center'>{image.name}</p>
                                                <button className='btn remove' onClick={(e) => handleRemove(e,index)}><i className="bi bi-x-circle fs-4"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                                
                            </div>

                        </form>
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