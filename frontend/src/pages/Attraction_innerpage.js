import { Link, useLocation } from 'react-router-dom';
import '../css/attractions.css';
// import '../css/bootstrap.css';
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

        // (async () => {
        //     const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/test`);
        //     console.log(response);
        //     setSpotData(response.data);
        // })();
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
                <input className="search-bar" type="text" name="search" id="search" placeholder="搜尋欄" />
                <div className="container hyperlink-location" >
                    <Link to="#" className="button-hyperlink">餐廳</Link>
                    <Link to="/attractions" className="button-hyperlink">景點</Link>
                    <Link to="#" className="button-hyperlink">討論區</Link>
                    <Link to="#" className="button-hyperlink">自助旅遊排程</Link>
                </div>
            </div>
            <div style={{ 'display': 'grid' }}>
                <div className="container-fluid d-flex m-0 p-0">
                    <div className="sidenav">
                        <Link to="/attractions/Attractionattraction"><h3 style={{ 'color': 'black' }}><b>種類</b></h3></Link>
                        <Link to="/attractions/Attractionmore">夜市</Link>
                        <Link to="/attractions/Attractionmore">港口</Link>
                        <Link to="/attractions/Attractionmore">市集</Link>
                        <Link to="/attractions/Attractionmore">購物</Link>
                        <Link to="/attractions/Attractionmore">人文景點</Link>
                        <Link to="/attractions/Attractionmore">自然景觀</Link>
                        <Link to="/attractions/Attractionmore">觀光工廠</Link>
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
                            <b><Link to="/attractions/Attractionmore" className="bottom-line">南投</Link></b>
                            <b>→</b>
                            <b><Link to="/attractions/Attractionmore" className="bottom-line">魚池鄉</Link></b>
                            <b>→</b>
                            <b className="bottom-line">{state.Name}</b>
                        </h4>
                        <div id="attractionpicture" style={{ 'backgroundColor': 'black' }}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='carousel-piture' src={state.PictureUrl1} />
                                </div>
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#attractionpicture" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#attractionpicture" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                        </div>
                        <div style={{ 'display': 'flex' }}>
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
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.835250205995!2d120.67618207629839!3d24.142423273611676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d12ca93cb15%3A0xbd0f6a8f559b6d54!2z6Ie65Lit56ys5LqM5biC5aC0!5e0!3m2!1szh-TW!2stw!4v1691584479756!5m2!1szh-TW!2stw"
                                        width="100%" height="100%" style={{ 'border': '0' }} allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div style={{ 'marginLeft': '10%', 'paddingTop': '1%' }}>
                                    <h6>
                                        {state.Transportation}
                                    </h6>
                                </div>
                            </div>
                        </div>
                        {/* <hr className="inner-pagger-border"></hr>
                        <div style={{ 'clear': 'both' }}>
                            <fieldset className="rm-fieldset attraction-message">
                                <img className="img-fluid-message" src="#" />
                                <div style={{ 'paddingTop': '10px' }}>
                                    <p style={{ 'float': 'left' }}>魯夫</p>
                                    <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                    <p>★ ★ ★ ☆ ☆</p>
                                </div>
                                <div>
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
                                </div>
                            </fieldset>
                            <fieldset className="rm-fieldset attraction-message">
                                <img className="img-fluid-message" src="#" />
                                <div style={{ 'paddingTop': '10px' }}>
                                    <p style={{ 'float': 'left' }}>魯夫</p>
                                    <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                    <p>★ ★ ★ ☆ ☆</p>
                                </div>
                                <div>
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
                                </div>
                            </fieldset>
                            <fieldset className="rm-fieldset attraction-message">
                                <img className="img-fluid-message" src="#" />
                                <div style={{ 'paddingTop': '10px' }}>
                                    <p style={{ 'float': 'left' }}>魯夫</p>
                                    <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                    <p>★ ★ ★ ☆ ☆</p>
                                </div>
                                <div>
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
                                </div>
                            </fieldset>
                        </div> */}
                        {/* <button id="openReviewModal"
                            style={{ 'borderRadius': '12px', 'marginBottom': '5px', 'padding': '10px 25px', 'float': 'left' }}>寫評論
                        </button>
                        <div className="review-modal">
                            <h3>評論和評分</h3>
                            <div className="rating">
                                <span><i className="fas fa-star" data-rating="5"></i></span>
                                <span><i className="fas fa-star" data-rating="4"></i></span>
                                <span><i className="fas fa-star" data-rating="3"></i></span>
                                <span><i className="fas fa-star" data-rating="2"></i></span>
                                <span><i className="fas fa-star" data-rating="1"></i></span>
                            </div>
                            <textarea id="comment" name="comment" rows="4" cols="50" placeholder="請輸入評論"></textarea>
                            <input type="file" id="image" name="image" accept="image/*" style={{ 'paddingTop': '5px' }} />
                            <button id="submitReview">提交</button>
                            <button id="cancelReview">取消</button>
                        </div>*/}
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
                        <div>
                            <Link to="/Attraction_innerpage/Attraction_forun" style={{ 'float': 'right' }} className="bottom-line" target="_blank">more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}