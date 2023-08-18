import React from 'react';
import '../css/restaurant.css';
import { Modal } from 'bootstrap';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
export default function RestaurantInner() {

    const { useState, useRef, useEffect } = React;

    const commentModal = useRef(null);

    const [attraction, setAttraction] = useState([{}]);

    let { state } = useLocation()
    console.log(state);
    console.log(attraction);
    useEffect(() => {
        commentModal.current = new Modal('#rest-comment');
        (async () => {
            const response = await axios.get(`http://localhost/TravelMaker/Backend/public/api/restaurant`);
            // response.data.filter((item)=>item.ID=state);
            const restData = response.data.filter((item) => item.ID === state);
            console.log(restData);
            setAttraction(restData);
        })();
    }, [])
    console.log(attraction[0].Name);
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };
    console.log(toggleFavorite);
    return (
        <div className="rest-main">

            <div className="p-3"><Link className="rm-link-style" to="/restaurant">餐廳</Link>＞<Link className="rm-link-style" to="/restaurant/search">搜尋</Link>＞{attraction[0].Name}</div>

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
                        <img className="carousel-rest" src="https://img.kenalice.tw/2018/01/1514816917-0dfd3d1617b9b8df653d3eebdf4c706f.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img className="carousel-rest" src="https://cdn2.ettoday.net/images/5658/d5658566.jpg" />
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
                {/* <p name="point">★ ★ ★ ★ ☆ 9527條評論</p> */}
                {/* <button onClick={toggleFavorite} style={{border : 'none', background : 'none'}}>
                    <i className={`bi ${isFavorited ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i>
                    {isFavorited ? '取消收藏' : '收藏'}
                </button> */}
                <div className="d-flex flex-row">
                    <div className="p-2">{attraction[0].Address}　|</div>
                    <div className="p-2">{attraction[0].Phone}　|</div>
                    <div className="p-2">{attraction[0].OpenTime}　|</div>
                    <div className="p-2 "><Link className="rm-link-style text-primary" to={attraction[0].Url}><i class="bi bi-globe"></i>官方網站</Link></div>
                </div>
            </div>
            <div className="row p-rest">
                <div className="col-md-6 p-3">
                    <div className="card rest-card  p-3" style={{ 'min-height': '250px' }}>
                        {attraction[0].Description}
                    </div>
                </div>
                <div className="col-md-6 p-3">
                    <div className="card rest-card  p-3" style={{ 'min-height': '250px' }}>
                        <iframe
                            src={attraction[0].MapUrl}
                            width="100%" height="210px" style={{ 'border': '0' }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-12 p-3" style={{ 'display': 'none' }}>
                    <div className="card rest-card  p-3">
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
                        <Link className="rm-link-style p-3 d-inline-flex justify-content-center" to="/restaurant/comment"><div className='p-2' style={{ borderRadius: '5px', border: '1px solid #ccc' }}><i class="bi bi-caret-down"></i>查看所有評論</div></Link>
                    </div>
                </div>
            </div>


        </div>
    )
}