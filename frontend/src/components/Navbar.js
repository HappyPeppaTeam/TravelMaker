import { Link } from 'react-router-dom';
import { Modal, Toast } from 'bootstrap';
import RegisterModal from './Register';
import LoginModal from './Login';
import LogoutModal from './Logout';
import MessageToast from './MessageToast';
import React from 'react';
import Cookies from 'js-cookie';


const { useRef, useEffect, useState } = React;

export default function Navbar() {
  const [message, setMessage] = useState('');
  const [checkToken, setCheckToken] = useState(false);
  const [username, setUsername] = useState('');
  const registerModal = useRef(null);
  const loginModal = useRef(null);
  const logoutModal = useRef(null);
  const messageToast = useRef(null);

  useEffect(() => {
    handleToken();
    setUsername(localStorage.getItem('username'));
    registerModal.current = new Modal('#registerModal', {
      backdrop: 'static',
    });
    loginModal.current = new Modal('#loginModal', {
      backdrop: 'static',
    });
    logoutModal.current = new Modal('#logoutModal', {
      backdrop: 'static',
    });
    messageToast.current = new Toast('#messageToast', {
      backdrop: 'staic',
    });
  }, []);

  const handleToken = () => {
    if (Cookies.get('token')) {
      setCheckToken(true);
    }
    // console.log(checkToken);
  }
  const handleResponse = (data) => {
    setMessage(data); // Assuming the backend returns a "message" field in the response
  };
  const openMessageToast = () => {
    messageToast.current.show();
    if (messageToast.current.isShown) {
      setTimeout(() => {
        // 隐藏 Toast
        messageToast.current.hide();
        window.location.href = '/';
        // 3秒后重新加载页面
      }, 3000);
    }
  };
  const closeMessageToast = () => {
    messageToast.current.hide();
    window.location.href = '/';
  };

  const openRegisterModal = () => {
    registerModal.current.show();
  };
  const closeRegisterModal = () => {
    registerModal.current.hide();
  };
  const openloginModal = () => {
    loginModal.current.show();
  };
  const closeloginModal = () => {
    loginModal.current.hide();
  };
  const openlogoutModal = () => {
    logoutModal.current.show();
  };
  const closelogoutModal = () => {
    logoutModal.current.hide();
  };
  return (<nav className="navbar navbar-expand-lg bg-main px-2">
    <RegisterModal closeRegisterModal={closeRegisterModal} onResponse={handleResponse} openMessageToast={openMessageToast} />
    <LogoutModal closelogoutModal={closelogoutModal} onResponse={handleResponse} openMessageToast={openMessageToast} />
    <LoginModal closeloginModal={closeloginModal} onResponse={handleResponse} openMessageToast={openMessageToast} />
    <MessageToast messageData={message} closeMessageToast={closeMessageToast} />
    <div className="container-fluid">
      <Link className="navbar-brand me-auto" to='/'
      ><img src="../images/logo.png" style={{ height: '70px' }} alt=""
        /></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <a className="ms-auto me-3 d-none d-lg-block" href="#"
        ><img src="../images/dark-mode.png" style={{ height: '40px' }} alt=""
          /></a>
        <ul className="navbar-nav py-3">
          <li className="nav-item">
          </li>
          {checkToken ? (
            <span className="navbar-brand text-white">{username} 歡迎登入!</span>
          ) : (
              <span></span>
            )}

          <li className="nav-item">
            {/* <Link className="nav-link" to='/album'>註冊</Link> */}
            {checkToken ? (
              <Link className="nav-link" to='/memberCenter' >會員中心</Link>
            ) : (
                <Link className="nav-link" onClick={openRegisterModal}>註冊</Link>
              )}

          </li>
          <li className="nav-item ms-lg-2">
            {checkToken ? (
              <Link className="nav-link" onClick={openlogoutModal}>登出</Link>
            ) : (
                <Link className="nav-link" onClick={openloginModal}>登入</Link>
              )}
          </li>
        </ul>
      </div>
    </div>
  </nav >)
}
