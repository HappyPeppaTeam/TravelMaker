import { Link } from 'react-router-dom';
import '../css/attractions.css';
// import '../css/bootstrap.css';

import React from 'react';
import axios from 'axios';


export default function Attractions() {
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


    return (
        <>
            <div className="backgroundmountain">
                {/* <input className="search-bar" type="text" name="search" id="search" placeholder="搜尋欄" /> */}
                {/* <div className="container hyperlink-location" >
                    <Link to="/restaurant"className="button-hyperlink">餐廳</Link>
                    <Link to="/attractions" className="button-hyperlink" onClick={() => window.location.reload()}>景點</Link>
                    <Link to="/forum" className="button-hyperlink">討論區</Link>
                    <Link to="/journey" className="button-hyperlink">自助旅遊排程</Link>
                </div> */}
            </div>
            <div style={{ 'backgroundColor': '#487797' }}>
                <div style={{ 'paddingTop': '1%' }} className="image-container">
                    <div className="container">
                        <h3 style={{ 'float': 'left' }}>推薦景點</h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right' }} className="bottom-line" state="新北">more</Link>
                    </div>
                    <div className="container" style={{ 'clear': 'both' }}>
                        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                            {attractionPicture.map((item, index) => {
                                if (index <= 3) {
                                    return (
                                        <div className="col-lg-3">
                                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }} state={item}>
                                                <img style={{ 'maxWidth': '100%', height: '200px', objectFit: 'cover' }} src={item.PictureUrl1} className='w-100' />
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
                <div style={{ 'paddingTop': '1%' }} className="image-container">
                    <div className="container">
                        <h3 style={{ 'float': 'left' }}>依地區分類</h3>
                        <Link to="/attractions/Attractioncountry" style={{ 'float': 'right' }} className="bottom-line">more</Link>
                    </div>
                    <div className="container" style={{ 'clear': 'both' }}>
                        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}state='新北'>
                                    <img style={{ 'maxWidth': '100%' }} src={require('../district/new_taipei.jpg')} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}state='臺中'>
                                    <img style={{ 'maxWidth': '100%' }} src={require('../district/taichung.jpg')} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}state='臺南'>
                                    <img style={{ 'maxWidth': '100%' }} src={require('../district/tainan.jpg')} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}state='高雄'>
                                    <img style={{ 'maxWidth': '100%' }} src={require('../district/kaohsiung.jpg')} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ 'paddingTop': '1%', 'paddingBottom': '1%' }} className="image-container">
                    <div className="container">
                        <h3 style={{ 'float': 'left' }}>依種類分類</h3>
                        <Link to="/attractions/Attractionattraction" style={{ 'float': 'right' }} className="bottom-line">more</Link>
                    </div>
                    <div className="container" style={{ 'clear': 'both' }}>
                        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}state='人文景點'>
                                    <img style={{ 'maxWidth': '100%' }} src={require('../district/人文景點.jpg')} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}state='市集'>
                                    <img style={{ 'maxWidth': '100%' }} src={require('../district/市集.jpg')} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}state='自然景觀'>
                                    <img style={{ 'maxWidth': '100%' }} src={require('../district/自然景觀.jpg')} />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}state='夜市'>
                                    <img style={{ 'maxWidth': '100%' }} src={require('../district/夜市.jpg')} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}