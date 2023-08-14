import React from 'react';
import '../css/restaurant.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Restaurant_main() {
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
            <div className="d-flex justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_1280.jpg" className="search-banner" alt="" />
                <form className="example align-items-center" action="/action_page.php"
                    style={{ 'max-width': '300px', 'position': 'absolute', 'padding': '4em 0' }}>
                    {/* <input type="text" placeholder="Search..." name="search2" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button> */}
                </form>
            </div>
            <div className="container rest-container">
                <div className="d-flex p-3">
                    <h4>推薦餐廳</h4>
                    <Link to="/restaurant/search" className="ms-auto rm-link-style">
                        <h5>see more</h5>
                    </Link>
                </div>
                <div className="row">
                    {attraction.map((item, index) => {
                        // 設定範圍，只渲染第1到第4筆資料
                        if (index >= 0 && index <= 3 && item.Name) {
                            return (
                                <div className="col-xl-3 col-sm-6 p-3" key={item.ID}>
                                    <Link to="/restaurant/inner" style={{ 'text-decoration': 'none' }} state={item.ID}>
                                        <div className="card rest-card">
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

                <div className="d-flex p-3">
                    <h4>依地區分類</h4>
                    <Link to="/restaurant/area" className="ms-auto rm-link-style">
                        <h5>see more</h5>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card rest-card text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" name="基隆" state={[220, 201, 202, 203, 204, 205, 206]}>
                                <img src={require('../district/keelung.jpg')} alt="Avatar" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card rest-card text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" name="台北" state={[100, 103, 104, 105, 106, 108, 110, 111, 112, 114, 115, 116]}>
                                <img src={require('../district/taipei.jpg')} alt="Avatar" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card rest-card text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" name="新北" state={[207, 208, 220, 221, 222, 223, 224, 226, 227, 228, 231, 232, 233, 234, 235, 236, 237, 238, 239, 241, 242, 243, 244, 247, 248, 249, 251, 252, 253]}>
                                <img src={require('../district/new_taipei.jpg')} alt="Avatar" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card rest-card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" name="桃園" state={[320, 324, 325, 326, 327, 328, 330, 33, 334, 35, 336, 337, 338]}>
                                <img src={require('../district/taoyuan.jpg')} alt="Avatar" />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="d-flex p-3">
                    <h4>依餐廳分類</h4>
                    <Link to="/restaurant/type" className="ms-auto rm-link-style">
                        <h5>see more</h5>
                    </Link>
                </div>
                <div className="row">
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card rest-card text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[1]}>
                                <img class="card-img-top"
                                    src="https://hotel.fhgh.com.tw/upload/news_dining_b/ALL_news_dining_21E21_aXVUglwioo.jpg"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台灣小吃</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card rest-card text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[2]}>
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/64/8e/f6/caption.jpg?w=600&h=400&s=1"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>美式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card rest-card text-white text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[3]}>
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/81/74/ab/photo1jpg.jpg?w=600&h=400&s=1"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>日式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card rest-card text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[4]}>
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6e/1e/e4/caption.jpg?w=600&h=-1&s=1"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>中式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}