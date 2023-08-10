import React from 'react';
import '../css/restaurant.css';
import { Modal } from 'bootstrap';
import axios from 'axios';
export default function RestaurantInner() {

    const { useState, useRef, useEffect } = React;

    const commentModal = useRef(null);

    const [attraction, setAttraction] = useState([{}]);

    console.log(attraction);
    useEffect(() => {
        commentModal.current = new Modal('#rest-comment');
        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/restaurant`);
            console.log(response);
            setAttraction(response.data);
        })();
    }, [])
    console.log(attraction[0].Name);
    return (
        <div className="main">

            <div className="p-3"><a className="rm-link-style" href="">餐廳</a>＞<a className="rm-link-style" href="">台中市</a>＞西屯區</div>

            <div id="rest-carousel" className="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img className="carousel-rest" src={attraction[0].PictureUrl1} />
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
                <h1 name="rest-name">{attraction[0].Name}</h1>
                <p name="point">★ ★ ★ ★ ☆ 9527條評論</p>
                <div className="d-flex flex-row">
                    <div className="p-2">{attraction[0].Address}　|</div>
                    <div className="p-2">{attraction[0].Phone}　|</div>
                    <div className="p-2">{attraction[0].OpenTime}　|</div>
                    <div className="p-2"><a className="rm-link-style" href="">{attraction[0].Url}</a></div>
                </div>
            </div>
            <div className="row p-rest">
                <div className="col-md-6 p-3">
                    <div className="card p-3" style={{ 'min-height': '40vh' }}>
                        我是餐廳介紹<br />
                        {attraction[0].Description}
                    </div>
                </div>
                <div className="col-md-6 p-3">
                    <div className="card p-3" style={{ 'min-height': '40vh' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5148.996037009213!2d120.68238028489449!3d24.14050040353045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d1438fb3d3f%3A0xb7b4ebd02f1906b6!2z6Ie65Lit54Gr6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1684984846087!5m2!1szh-TW!2stw"
                            width="100%" height="100vh" style={{ 'border': '0' }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-12 p-3">
                    <div className="card p-3">
                        <h1>評論</h1>
                        <h4>留下評論:</h4>
                        <p>來過這裡嗎？留下評論吧！</p>
                        <button className="btn btn-primary" style={{ 'width': '200px' }} data-bs-toggle="modal"
                            data-bs-target="#rest-comment">寫下評論</button>

                        <div data-bs-backdrop="static" id="rest-comment" className="modal" tabindex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">留下評論:</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <textarea id="rest-leave-comment" name="rest-leave-comment" rows="4"
                                            cols="50">留下你的評論!</textarea>
                                        <br />
                                    </div>
                                    <div className="modal-footer">
                                        <input type="submit" value="提交" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h3>用戶評論</h3>
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
                        <a className="rm-link-style p-3 d-inline-flex justify-content-center" href="/restaurant/comment"><div className='p-2' style={{ borderRadius: '5px', border: '1px solid #ccc' }}><i class="bi bi-caret-down"></i>查看所有評論</div></a>
                    </div>
                </div>
            </div>


        </div>
    )
}