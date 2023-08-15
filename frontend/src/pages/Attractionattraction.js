import { Link } from 'react-router-dom';
import '../css/attractions.css';
// import '../css/bootstrap.css';

import React from 'react';
import axios from 'axios';
export default function Attractionattraction() {
    const { useState, useEffect } = React;



    const [attractionPicture, setAttractionPicture] = useState([{}]);
    console.log(attractionPicture);
    useEffect(() => {


        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/attraction`);
            console.log(response);
            setAttractionPicture(response.data);
        })();
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
                {/* <input className="search-bar" type="text" name="search" id="search" placeholder="搜尋欄" /> */}
                {/* <div className="container hyperlink-location" >
                    <Link to="/restaurant" className="button-hyperlink">餐廳</Link>
                    <Link to="/attractions" className="button-hyperlink">景點</Link>
                    <Link to="/forum" className="button-hyperlink">討論區</Link>
                    <Link to="/journey" className="button-hyperlink">自助旅遊排程</Link>
                </div> */}
            </div>
            <div style={{ 'display': 'grid', 'backgroundColor': '#487797' }}>
                <div className="container-fluid d-flex m-0 p-0">
                    <div className="sidenav">
                        <Link to="/attractions/Attractionattraction" onClick={() => window.location.reload()}><h3 style={{ 'color': 'black' }}><b>種類</b></h3></Link>
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
                    <div className="container image-container">
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%' }}><b>夜市</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line" state='夜市'>
                            <h4>
                                more
                            </h4>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                {attractionPicture.filter((item, index) => {
                                    return item.TypeID == 1;
                                }).map((item, index) => {
                                    if (index <= 3) {
                                        return (
                                            <div className="col-lg-3">
                                                <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }} state={item}>
                                                    <img className="img-thumbnail2" src={item.PictureUrl1} />
                                                    <div>
                                                        <b>{item.Name}</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%' }}><b>港口</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line" state='港口'>
                            <h4>
                                more
                            </h4>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                {
                                    attractionPicture.filter((item, index) => {
                                        return item.TypeID == 2;
                                    }).map((item, index) => {
                                        if (index <= 3) {
                                            return (
                                                <div className="col-lg-3">
                                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }} state={item}>
                                                        <img className="img-thumbnail2" src={item.PictureUrl1} />
                                                        <div>
                                                            <b>{item.Name}</b>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%' }}><b>市集</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line" state='市集'>
                            <h4>
                                more
                            </h4>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                {attractionPicture.filter((item, index) => {
                                    return item.TypeID == 3;
                                }).map((item, index) => {
                                    if (index <= 3) {
                                        return (
                                            <div className="col-lg-3">
                                                <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }} state={item}>
                                                    <img className="img-thumbnail2" src={item.PictureUrl1} />
                                                    <div>
                                                        <b>{item.Name}</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%' }}><b>購物</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line" state='購物'>
                            <h4>
                                more
                            </h4>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                {attractionPicture.filter((item, index) => {
                                    return item.TypeID == 4;
                                }).map((item, index) => {
                                    if (index <= 3) {
                                        return (
                                            <div className="col-lg-3">
                                                <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }} state={item}>
                                                    <img className="img-thumbnail2" src={item.PictureUrl1} />
                                                    <div>
                                                        <b>{item.Name}</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%' }}><b>人文景點</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line" state='人文景點'>
                            <h4>
                                more
                            </h4>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                {attractionPicture.filter((item, index) => {
                                    return item.TypeID == 5;
                                }).map((item, index) => {
                                    if (index <= 3) {
                                        return (
                                            <div className="col-lg-3">
                                                <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }} state={item}>
                                                    <img className="img-thumbnail2" src={item.PictureUrl1} />
                                                    <div>
                                                        <b>{item.Name}</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%' }}><b>自然景觀</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line" state='自然景觀'>
                            <h4>
                                more
                            </h4>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                {attractionPicture.filter((item, index) => {
                                    return item.TypeID == 6;
                                }).map((item, index) => {
                                    if (index <= 3) {
                                        return (
                                            <div className="col-lg-3">
                                                <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }} state={item}>
                                                    <img className="img-thumbnail2" src={item.PictureUrl1} />
                                                    <div>
                                                        <b>{item.Name}</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%' }}><b>觀光工廠</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line" state='觀光工廠'>
                            <h4>
                                more
                            </h4>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                {attractionPicture.filter((item, index) => {
                                    return item.TypeID == 7;
                                }).map((item, index) => {
                                    if (index <= 3) {
                                        return (
                                            <div className="col-lg-3">
                                                <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }} state={item}>
                                                    <img className="img-thumbnail2" src={item.PictureUrl1} />
                                                    <div>
                                                        <b>{item.Name}</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}