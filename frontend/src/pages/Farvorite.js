import '../css/sidebar.css';
import Sidebar from '../components/Sidebar';
import ImageUploadButton from '../components/ImageUploadButton';
import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import withAuthorization from '../hook/withAuthorization';

const { useEffect, useState } = React;
const Farvorite = () => {
    return (

        <div className="container-fluid shadow p-0 bg-white" id="body-container">
            <div className="d-flex flex-nowrap row container-fluid m-0 p-0" id="content-container"></div>
            <Sidebar MemberCenter="active"></Sidebar>
            <div className="main vh-100">
                景點
            <div class="col-xl-3 col-sm-6 p-3 p-3">
                    <div class="card rest-card text-center">
                        {/* <Link to="/restaurant/search" class="rm-link-style text-white" state={[2]}> */}
                        <img class="card-img-top"
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/64/8e/f6/caption.jpg?w=600&h=400&s=1"
                            alt="Avatar" />
                        <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                            <h3>美式料理</h3>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 p-3 p-3">
                    餐廳
                <div class="card rest-card text-center">
                        {/* <Link to="/restaurant/search" class="rm-link-style text-white" state={[2]}> */}
                        <img class="card-img-top"
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/64/8e/f6/caption.jpg?w=600&h=400&s=1"
                            alt="Avatar" />
                        <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                            <h3>美式料理</h3>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default withAuthorization([''])(Farvorite);;