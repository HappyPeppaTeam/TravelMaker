import { Link, useLocation } from 'react-router-dom';
import '../css/attractions.css';
import { Modal } from 'bootstrap';
import React from 'react';
import axios from 'axios';



export default function Attraction_innerpage() {
    const { useState, useEffect, useRef } = React;
    let { state } = useLocation();
    console.log(state);

    const commentModal = useRef(null);

    const [spotData, setSpotData] = useState([{}]);


    useEffect(() => {
        commentModal.current = new Modal('#rest-comment');
    }, []);

    const [ZipID, setZipID] = useState([{}]);
    console.log(ZipID);
    useEffect(() => {


        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/zipcode`);
            console.log(response);
            setZipID(response.data);
        })();
    }, []);

    const [TypeName, setTypeName] = useState([{}]);
    console.log(TypeName);
    useEffect(() => {


        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/typeid`);
            console.log(response);
            setTypeName(response.data);
        })();
    }, []);


    function dropDown(e) {
        e.target.classList.toggle("active2");
        var dropdownContent = e.target.nextElementSibling;
        if (dropdownContent.style.display === "block") { dropdownContent.style.display = "none"; }
        else {
            dropdownContent.style.display = "block";
        }
    }


    return (
        <>
            <div className="backgroundmountain">
                <div className="container hyperlink-location" >
                    <Link to="/restaurant" className="button-hyperlink">餐廳</Link>
                    <Link to="/attractions" className="button-hyperlink">景點</Link>
                    <Link to="/forum" className="button-hyperlink">討論區</Link>
                    <Link to="/journey" className="button-hyperlink">自助旅遊排程</Link>
                </div>
            </div>
            <div style={{ 'display': 'grid' }}>
                <div className="container-fluid d-flex m-0 p-0">
                    <div className="sidenav">
                        <Link to="/attractions/Attractionattraction"><h3 style={{ 'color': 'black' }}><b>種類</b></h3></Link>
                        {TypeName.map((item, index) => {
                            return (
                                <Link to="/attractions/Attractionmore" state={item.TypeID}>{item.ChineseType}</Link>
                            )
                        })}
                        <Link to="/attractions/Attractioncountry"><h3 style={{ 'color': 'black' }}><b>地區</b></h3></Link>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>基隆
                        </button>
                        <div className="dropdown-container" >
                            {ZipID.map((item, index) => {
                                if (index <= 18 && index >= 12) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>台北
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 11 && index >= 0) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>新北
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 47 && index >= 19) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>桃園
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 87 && index >= 75) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>新竹
                        </button>
                        <div className="dropdown-container" >
                            {ZipID.map((item, index) => {
                                if (index <= 74 && index >= 61) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>苗栗
                        </button>
                        <div className="dropdown-container" >
                            {ZipID.map((item, index) => {
                                if (index <= 105 && index >= 88) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>台中
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 134 && index >= 106) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>彰化
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 160 && index >= 135) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>南投
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 173 && index >= 161) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>雲林
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 193 && index >= 174) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>嘉義
                        </button>
                        <div className="dropdown-container" >
                            {ZipID.map((item, index) => {
                                if (index <= 212 && index >= 194) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>台南
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 249 && index >= 213) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>高雄
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 289 && index >= 250) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>屏東
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 328 && index >= 296) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>臺東
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 344 && index >= 329) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>花蓮
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 357 && index >= 345) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>宜蘭
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 60 && index >= 48) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>澎湖
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 295 && index >= 290) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>金門
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 363 && index >= 358) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                        <button className="dropdown-btn" onClick={(e) => {
                            dropDown(e);
                        }}>馬祖
                        </button>
                        <div className="dropdown-container">
                            {ZipID.map((item, index) => {
                                if (index <= 367 && index >= 364) {
                                    return (
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="container" >
                        <h4>
                            <b><Link to="/attractions" className="bottom-line">景點</Link></b>
                            <b>→</b>
                            <b><Link to="/attractions/Attractionmore" className="bottom-line" state={state.Address.substring(0, 2)}>{state.Address.substring(0, 3)}</Link></b>
                            <b>→</b>
                            <b><Link to="/attractions/Attractionmore" className="bottom-line" state={state.ZipCode}>{state.Address.substring(6, 3)}</Link></b>
                            <b>→</b>
                            <b className="bottom-line">{state.Name}</b>
                        </h4>
                        <div id="attractionpicture" style={{ 'backgroundColor': 'black' }}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='carousel-piture' src={state.PictureUrl1} />
                                </div>
                            </div>
                        </div>
                        <div style={{ 'display': 'flex', 'justify-content': 'space-between' }}>
                            <h1>
                                <b>
                                    {state.Name}
                                </b>
                            </h1>
                    </div>

                    <h5>
                        {state.DescriptionDetail}
                    </h5>
                    <hr className='inner-pagger-border'></hr>
                    <div className='row'>
                        <div className='col-6' >
                            <h3><b>資訊</b></h3>
                            <hr style={{ 'border': '1px solid black' }}></hr>
                            <h4 style={{ float: 'left' }}><b>地址:</b></h4><h4>{state.Address}</h4>
                            <hr style={{ 'border': '1px solid black' }}></hr>
                            <h4 style={{ float: 'left' }}><b>電話:</b></h4><h4>{state.Phone}</h4>
                            <hr style={{ 'border': '1px solid black' }}></hr>
                            <h4><b>開放時間:</b></h4>
                            <h5 style={{ 'display': 'flex' }}>
                                {state.OpenTime}
                            </h5>
                        </div>
                        <div className="col-6">
                            <div style={{ 'marginLeft': '10%' }}>
                                <h3><b>交通資訊</b></h3>
                                <hr style={{ 'border': '1px', 'solid': 'black', 'width': '100%' }}></hr>
                                <iframe src={state.mapurl}
                                    width="95%" height="100%" style={{ 'border': '0' }} allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div style={{ 'marginLeft': '10%', 'paddingTop': '1%' }}>
                                <h6>
                                    {state.Transportation}
                                </h6>
                            </div>
                        </div>
                    </div>
                    
                    <button className="btn btn-primary" style={{ width: '200px' }} data-bs-toggle="modal"
                        data-bs-target="#rest-comment">寫下評論</button>

                    <div data-bs-backdrop="static" id="rest-comment" className="modal" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">留下評論:</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <textarea id="rest-leave-comment" name="rest-leave-comment" rows="4"
                                        cols="50"></textarea>
                                    <br />
                                    <input type='file'></input>
                                </div>
                                <div className="modal-footer">
                                    <input type="submit" value="提交" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    )
}