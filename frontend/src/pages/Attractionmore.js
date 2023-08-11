import { Link, useLocation } from 'react-router-dom';
import '../css/attractions.css';
// import '../css/bootstrap.css';

import React from 'react';
import axios from 'axios';


export default function Attractionmore() {
    const { useState, useEffect, useRef } = React;
    let { state } = useLocation();



    const [attractionPicture, setAttractionPicture] = useState([{}]);


    console.log(attractionPicture);
    useEffect(() => {

        (async () => {
            // const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/attraction/${state}`);
            // console.log(response);
            // setAttractionPicture(response.data);
            console.log(typeof state);
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/attraction`);
            if (typeof state === 'number') {
                const test = response.data.filter(item => item.ZipCode === state);
                setAttractionPicture(test);
            } else {
                console.log(state.substring(0, 3));
                const test = response.data.filter(item => item.Address.substring(0, 3) === state);
                setAttractionPicture(test);
            }
        })();
    }, []);
    // console.log(attractionPicture);
    const [ZipID, setZipID] = useState([{}]);
    // console.log(ZipID);
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
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/type`);
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
                        {TypeName.map((item, index) => {
                            return (
                                <Link to="/attractions/Attractionmore" state={item.TypeID} onClick={() => window.location.reload()}>{item.ChineseType}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
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
                                        <Link to="/attractions/Attractionmore" state={item.ZipCode} onClick={() => window.location.reload()}>{item.Area}</Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="container">
                        {attractionPicture.map((item, index) => {
                            return (
                                <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }} key={index}>
                                    <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line" state={item}>
                                        <fieldset className="rm-fieldset">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <img src={item.PictureUrl1} style={{ 'maxWidth': '100%', height: '200px', objectFit: 'cover' }} className='w-100' />
                                                </div>
                                                <div className="col-lg-8">
                                                    <h3><b>{item.Name}</b></h3>
                                                    <p>{item.Description}</p>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </Link>
                                </div>
                            )
                        })}
                        <div className="pagination-wrapper">
                            <div className="pagination">
                                <Link to="#">&laquo;</Link>
                                <Link to="#" className="active">1</Link>
                                <Link to="#">2</Link>
                                <Link to="#">3</Link>
                                <Link to="#">4</Link>
                                <Link to="#">5</Link>
                                <Link to="#">6</Link>
                                <Link to="#">7</Link>
                                <Link to="#">8</Link>
                                <Link to="#">9</Link>
                                <Link to="#">10</Link>
                                <Link to="#">&raquo;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}