import React from 'react';
import '../css/restaurant.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function RestaurantComment() {
    const { useState, useEffect } = React;

    const [attraction, setAttraction] = useState([{}]);

    console.log(attraction);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/restaurant`);
            console.log(response);
            setAttraction(response.data);
        })();
    }, [])
    return (
        <div className="rest-main">

            <div>
                <div style={{'width': '20%',  'float': 'left'}}>132
                </div>
                <div style={{'width': '80%',  'float': 'left'}}>456
                <div className="row">
                    {attraction.map((item, index) => {
                        // 設定範圍，只渲染第1到第4筆資料
                        if (index >= 0 && index <= 3 && item.Name) {
                            return (
                                <div className="col-xl-3 col-sm-6 p-3" key={item.ID}>
                                    <Link to="/restaurant/inner" style={{ 'text-decoration': 'none' }} state={item.ID}>
                                        <div className="card">
                                            <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                            <div className="rest-container p-3">
                                                <h5><b>{item.Name}</b></h5>
                                                <p style={{ 'font-size': '0.875em' }}>營業時間:{item.OpenTime}</p>
                                                <p>{item.Address.substring(0, 6)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                </div>
            </div>




            <div className="p-3"><a className="rm-link-style" href="">餐廳</a>＞<a className="rm-link-style" href="">台中市</a>＞西屯區</div>

            <div id="rest-carousel" className="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="carousel-rest" src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_1280.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-rest" src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_1280.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-rest" src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_1280.jpg" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#rest-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#rest-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="p-rest">
                <h1 name="rest-name">森森燒肉</h1>
                <p name="point">★ ★ ★ ★ ☆ 9527條評論</p>
                <div className="d-flex flex-row">
                    <div className="p-2">408台中市南屯區黎明路二段382號 |</div>
                    <div className="p-2">04-22582302 |</div>
                    <div className="p-2">營業時間 : 11:00~22:00 |</div>
                    <div className="p-2">官方網站 : <a className="rm-link-style" href="">www.1234.com</a></div>
                </div>
            </div>
            <div className="row p-rest">
                <div className="col-12 p-3">
                    <div className="card p-3">
                        <h3>所有評論</h3>
                        <div id="first-comment">
                            <div className="d-flex flex-row">
                                <div className="p-2" style={{ width: '70px' }}><img id="user-img" src="../images/logo.png" className="rounded-circle" style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt="" /></div>
                                <div className="p-2">★ ★ ★ ★ ☆ 一年前 </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="p-2" style={{ width: '70px' }}>陳先生</div>
                                <div className="p-2">這邊是留下的所有評論</div>
                            </div>
                        </div>
                        <hr />
                        <div id="second-comment">
                            <div className="d-flex flex-row">
                                <div className="p-2" style={{ width: '70px' }}><img id="user-img" src="../images/logo.png" className="rounded-circle" style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt="" /></div>
                                <div className="p-2">★ ★ ★ ★ ☆ 一年前 </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="p-2" style={{ width: '70px' }}>陳先生</div>
                                <div className="p-2">這邊是留下的所有評論</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}