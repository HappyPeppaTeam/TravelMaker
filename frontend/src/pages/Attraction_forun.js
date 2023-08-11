import { Link } from 'react-router-dom';
import '../css/attractions.css';
import React from 'react';
import axios from 'axios';
// import '../css/bootstrap.css';

export default function Attraction_forun() {
    const { useState, useEffect } = React;
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
                    <div className='container'>
                        <img src="#" style={{ 'width': '100%', 'height': '500px' }} />
                        <h1 style={{ 'float': 'left' }}><b>台中火車站</b></h1>
                        <h1 style={{ 'paddingLeft': '150px' }}>★ ★ ★ ☆ ☆</h1>
                        <fieldset className="rm-fieldset attraction-message">
                            <img className="img-fluid-message" src="#" />
                            <div style={{ 'paddingTop': '10px' }}>
                                <p style={{ 'float': 'left' }}>魯夫</p>
                                <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                <p>★ ★ ★ ☆ ☆</p>
                            </div>
                            <div>
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
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
                                <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...</p>
                            </div>
                        </fieldset>
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