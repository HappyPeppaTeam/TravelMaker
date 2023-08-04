import '../css/sidebar.css';
// import '../css/album.css';
import Sidebar from '../components/Sidebar';
import React from 'react';
import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const { useRef, useEffect, useState } = React;
const MemberCenter = () => {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [nickName, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    useEffect(() => {
        getProfile();
    });

    const getProfile = async () => {
        let data = {}
        data['token'] = Cookies.get('token')
        try {
            const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/profile', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            if (!response.status === 200) {
                throw new Error('Network response was not ok');
            }
            console.log('Response from backend:', response.data[0].user_name);
            setUsername(response.data[0].user_name)
            setFullName(response.data[0].full_name)
            setNickName(response.data[0].nick_name)
            setEmail(response.data[0].email)
            setBirthday(response.data[0].birthday)
            setGender(response.data[0].gender)
        } catch (error) {
            // Handle error, if any
            console.error(error);
        }
    }
    return (

        <>
            <div className="container-fluid shadow p-0 bg-white" id="body-container">
                <div className="d-flex flex-nowrap row" id="content-container">
                    {/* side bar */}
                    <Sidebar></Sidebar>

                    {/* main content */}
                    <div className="flex-fill" id="content">
                        <section className="bg-light">
                            <div className="container">
                                <h1 className="row">會員基本資料</h1>
                                <div className="row">
                                    <div className="col-lg-12 mb-4 mb-sm-5">
                                        <div className="card card-style1 border-0">
                                            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-6 mb-4 mb-lg-0">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." />
                                                        <div className="row col-lg-6 mb-4 mb-lg-0 p-2">
                                                            <button className="btn btn-info">修改頭像</button>
                                                        </div>
                                                    </div>
                                                    {/* Add member details here */}
                                                    <div
                                                        class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                                        <h3 class="h2 text-white mb-0">會員姓名：{fullName}</h3>
                                                        <span class="text-white">會員暱稱：{nickName}</span>
                                                    </div>
                                                    <ul className="list-unstyled mb-1-9">
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <span className="display-26 text-secondary me-2 font-weight-600">會員帳號:</span>
                                                            {username}
                                                        </li>
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <span className="display-26 text-secondary me-2 font-weight-600">論壇身份:</span>
        普通
      </li>
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <span className="display-26 text-secondary me-2 font-weight-600">會員密碼:</span>
        *******
      </li>
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <button className="btn btn-danger">修改密碼</button>
                                                        </li>
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <span className="display-26 text-secondary me-2 font-weight-600">電子郵件:</span>
                                                            {email}
                                                        </li>
                                                        <li className="mb-2 mb-xl-3 display-28">
                                                            <span className="display-26 text-secondary me-2 font-weight-600">生日:</span>
                                                            {birthday}
                                                        </li>
                                                        <li className="display-28">
                                                            <span className="display-26 text-secondary me-2 font-weight-600">性別:</span>
                                                            {gender}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-progress progress progress-medium" style={{ height: '4px' }}>
                                        <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{ width: '60%' }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MemberCenter;