import '../css/sidebar.css';
import '../css/createAlbum.css';
import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import Sidebar from '../components/Sidebar';
import Swal from 'sweetalert2';

const { useState, useRef, useEffect } = React;

function useImage() {
    const inputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [imagesData, setImagesData] = useState([]);

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
    const handleRemove = (e,imgIndex) => {
        e.preventDefault();
        setImages(images.filter((img,index) => {
            if(index === imgIndex) {
                URL.revokeObjectURL(img.url);
            }
            return index !== imgIndex;
        }))
        setImagesData(imagesData.filter((item,index) => {
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
        if(images.length === 0 && inputRef.current){
            inputRef.current.value = "";
        }
    },[images])
  
    return {
      images,
      imagesData,
      handleUpload,
      handleRemove,
      handleRemoveAll,
      inputRef,
    }
}

const EditAlbum = () => {
    const { images, imagesData, handleUpload, handleRemove, handleRemoveAll, inputRef } = useImage();
    let { state } = useLocation();
    const [ albumName, setAlbumName ] = useState(state.album_name);
    const [ tag, setTag ] = useState(state.tag);
    const [ description, setDescription ] = useState(state.description);
    const [ albumImages, setAlbumImages ] =useState(state.photos);
    const [ removedImg, setRemovedImg ] = useState([]);
    const token = Cookies.get('token');

    const removeExistingImg = (e,imgIndex,imgId) => {
        e.preventDefault();
        setRemovedImg([...removedImg,imgId]);
        const newData = albumImages.filter((item,index) => index !== imgIndex);
        setAlbumImages(newData);
    }

    const handleSubmit = async (e) => {
        const formData = new FormData();
        formData.append('album_name',albumName);
        formData.append('tag',tag);
        formData.append('description',description);

        removedImg.forEach((imgId) => {
            formData.append('removedImg[]',imgId);
        });

        imagesData.forEach((image,index) => {
            formData.append(`images[${index}]`,image);
        });

        try {
            const response = await axios.post(`http://localhost/TravelMaker/Backend/public/api/albums/${token}/${state.album_id}`,formData)
            .then((res) => {
                // alert('相簿已成功更新!')
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: '相簿已成功更新!',
                    showConfirmButton: false,
                    timer: 2000,
                  })
            });
            setTimeout(() => {
                window.location='http://localhost:3000/album';
            },1000);
        } catch (error) {
            console.log('Error:',error.response);
        }
    };

    return (
        <>
        <div className="container-fluid shadow p-0 bg-white" id="body-container">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0" id="content-container">
            <Sidebar></Sidebar>
                <div className="flex-fill px-0 justify-content-center" id="content" style={{height: "100%", minHeight: "calc(100vh - 70px)"}}>
                    <div className='wrap m-5'>
                        <h1>編輯相簿</h1>

                        <form action="" id="albumForm" className="tab mt-4 d-block">
                            
                            <div className="mb-3">
                                <label htmlFor="albumName" className="form-label fs-4">相簿名稱</label>
                                <input type="text" className="form-control" id="albumName"
                                    aria-describedby="albumName" placeholder="如 : 金瓜石兩日遊" value={albumName} onChange={(e) => setAlbumName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label fs-4">分類</label>
                                <input type="text" className="form-control" id="tag"
                                    aria-describedby="tag" placeholder="如 : 台北" value={tag} onChange={(e) => setTag(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label fs-4">備註</label>
                                <textarea className="form-control" id="description" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
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
                                {albumImages.map((image,index) => {
                                    return (
                                        <div className='col' key={index}>
                                            <img className='selectedImg w-100' src={`http://localhost/TravelMaker/Backend/public/storage/${image.image_url}`} />
                                            <div className='imgInfo'>
                                                <div className='fileName w-100 d-flex justify-content-between align-items-center'>
                                                    <p className='m-0 py-2 ps-2 text-white text-center'>{image.image_name}</p>
                                                    <button className='btn remove' value={image.image_id} data-id={image.image_id} onClick={(e) => removeExistingImg(e,index,image.image_id)}><i className="bi bi-x-circle fs-4"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {images.map((image,index) => {
                                    return (
                                    <div className='col' key={index}>
                                        <img className='selectedImg w-100' src={image.url} />
                                        <div className='imgInfo'>
                                            <div className='fileName w-100 d-flex justify-content-between align-items-center'>
                                                <p className='m-0 py-2 ps-2 text-white text-center'>{image.name}</p>
                                                <button className='btn remove' onClick={(e) => handleRemove(e,index)}><i className="bi bi-x-circle fs-4"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                                
                            </div>
                            <div className='w-100 d-flex justify-content-end mt-3'>
                                <button type='button' className='btn btn-primary' onClick={handleSubmit}>送出</button>
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

export default EditAlbum;