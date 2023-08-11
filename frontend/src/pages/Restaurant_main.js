import React from 'react';
import '../css/restaurant.css';
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
        <div className="main">
            <div className="d-flex justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_1280.jpg" className="search-banner" alt="" />
                <form className="example align-items-center" action="/action_page.php"
                    style={{ 'max-width': '300px', 'position': 'absolute', 'padding': '4em 0' }}>
                    <input type="text" placeholder="Search..." name="search2" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </form>
            </div>
            <div className="container">
                <div className="d-flex p-3">
                    <h4>推薦餐廳</h4>
                    <a href="/restaurant/search" className="ms-auto rm-link-style">
                        <h5>see more</h5>
                    </a>
                </div>
                <div className="row">
                    {attraction.map((item, index) => {
                        // 設定範圍，只渲染第1到第4筆資料
                        if (index >= 0 && index <= 3 && item.Name) {
                            return (
                                <div className="col-xl-3 col-sm-6 p-3" key={item.ID}>
                                    <a href="/restaurant/inner" style={{ 'text-decoration': 'none' }}>
                                        <div className="card">
                                            <img src={item.PictureUrl1 === null ? "https://img.lovepik.com/free-png/20210919/lovepik-hand-painted-cloud-png-image_400633131_wh1200.png" : item.PictureUrl1} alt={item.Name} />
                                            <div className="container p-3">
                                                <h5><b>{item.Name}</b></h5>
                                                <p style={{ 'font-size': '0.875em' }}>營業時間:{attraction[0].OpenTime}</p>
                                                <p>{item.Address.substring(0, 6)}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        }
                        return null;
                    })}

                    {/* <div className="col-xl-3 col-sm-6 p-3">
                        <a href="" style={{ 'text-decoration': 'none' }}>
                            <div className="card">
                                <img src="../images/street.jpg" alt="推薦餐廳" />
                                <div className="container p-3">
                                    <h4><b>森森燒肉 台中西屯店</b></h4>
                                    <p>★ ★ ★ ★ ☆ 9527條評論</p>
                                    <p>台中市 西屯區</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3">
                        <a href="" style={{ 'text-decoration': 'none' }}>
                            <div className="card">
                                <img src="../images/street.jpg" alt="推薦餐廳" />
                                <div className="container p-3">
                                    <h4><b>森森燒肉 台中西屯店</b></h4>
                                    <p>★ ★ ★ ★ ☆ 9527條評論</p>
                                    <p>台中市 西屯區</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3">
                        <a href="" style={{ 'text-decoration': 'none' }}>
                            <div className="card">
                                <img src="../images/street.jpg" alt="推薦餐廳" />
                                <div className="container p-3">
                                    <h4><b>森森燒肉 台中西屯店</b></h4>
                                    <p>★ ★ ★ ★ ☆ 9527條評論</p>
                                    <p>台中市 西屯區</p>
                                </div>
                            </div>
                        </a>
                    </div> */}
                </div>

                <div className="d-flex p-3">
                    <h4>依地區分類</h4>
                    <a href="/restaurant/area" className="ms-auto rm-link-style">
                        <h5>see more</h5>
                    </a>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img src={require('../district/keelung.jpg')} alt="Avatar" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img src={require('../district/taipei.jpg')} alt="Avatar" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img src={require('../district/new_taipei.jpg')} alt="Avatar" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img src={require('../district/taoyuan.jpg')} alt="Avatar" />
                            </a>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台北市</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台北市</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台北市</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台北市</h3>
                                </div>
                            </a>
                        </div>
                    </div> */}
                </div>

                <div className="d-flex p-3">
                    <h4>依餐廳分類</h4>
                    <a href="/restaurant/type" className="ms-auto rm-link-style">
                        <h5>see more</h5>
                    </a>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img className="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/64/8e/f6/caption.jpg?w=600&h=400&s=1"
                                    alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>美式料理</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <a href="" className="rm-link-style text-white">
                                <img className="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6e/1e/e4/caption.jpg?w=600&h=-1&s=1"
                                    alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>中式料理</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <a href="" className="rm-link-style text-white">
                                <img className="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/81/74/ab/photo1jpg.jpg?w=600&h=400&s=1"
                                    alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>日式料理</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <a href="" className="rm-link-style text-white">
                                <img className="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/dd/72/6b/1.jpg?w=600&h=-1&s=1"
                                    alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>泰式料理</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}