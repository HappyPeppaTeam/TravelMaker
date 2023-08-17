import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginModal = ({ closeloginModal, onResponse, openMessageToast }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleGoogle = () => {
    window.location.href = 'http://localhost/TravelMaker/Backend/public/api/auth/google';
  };
  const login = async () => {
    const userData = {
      username,
      password,
    };
    try {
      const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/login', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (!response.status === 200) {
        throw new Error('Network response was not ok');
      }
      const data = response.data.message;
      // Handle the response from the backend, if needed
      onResponse(data);
      closeloginModal();
      openMessageToast();
      if (Cookies.get('role') === 'admin') {
        window.location.href = 'http://localhost:3000/Admin';
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      console.log('Response from backend:', data);
    } catch (error) {
      // Handle error, if any
      closeloginModal();
      console.error(error);
      onResponse('帳號或密碼錯誤')
      openMessageToast();
    }
  };

  const hoverPointerStyle = {
    cursor: 'pointer',
    color: 'blue',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: 'scale(1)',
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100 text-center" id="exampleModalLabel">會員登入</h5>
            <button type="button" className="btn-close" onClick={closeloginModal}></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">會員帳號</span>
              <input type="text" className="form-control" id="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">會員密碼</span>
              <input type="password" className="form-control" id="password" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <div>
              <Link className="btn btn-link" to='/ForgotPassword' onClick={closeloginModal} >忘記密碼</Link>
            </div>
            <label htmlFor="quickLogin"> 快速登入：
            <i className="bi bi-google" id="quickLogin" style={hoverPointerStyle} onClick={handleGoogle}></i>
            </label>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" className="btn btn-primary" onClick={login}>確認</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
