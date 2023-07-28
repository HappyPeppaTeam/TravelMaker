import { Link } from 'react-router-dom';
import { Modal } from 'bootstrap';
import RegisterModal from './Register';
import LoginModal from './Login';
import MessageModal from './MessageModal';
import React from 'react';

const {  useRef, useEffect ,useState} = React;

export default function Navbar() {
  const [message, setMessage] = useState('');
  const registerModal = useRef(null);
  const loginModal = useRef(null);
  const messageModal = useRef(null);
    useEffect(() => {
      registerModal.current = new Modal('#registerModal',{
            backdrop: 'static',
        });
      loginModal.current = new Modal('#loginModal',{
            backdrop: 'static',
        });  
      messageModal.current = new Modal('#messageModal',{
            backdrop: 'static',
        });  
    })
    const handleRegisterResponse = (data) => {
      setMessage(data.message); // Assuming the backend returns a "message" field in the response
      console.log(message);
      openMessageModal();
    };
    const openMessageModal = () => {
      messageModal.current.show();
    };
    const closeMessageModal = () => {
      messageModal.current.hide();
    };

    const openRegisterModal = () => {
      registerModal.current.show();
    }

    const closeRegisterModal = () => {
      registerModal.current.hide();
    }
    const openloginModal = () => {
      loginModal.current.show();
    }

    const closeloginModal = () => {
      loginModal.current.hide();
    }
    return (<nav className="navbar navbar-expand-lg bg-main px-2">
      <RegisterModal closeRegisterModal={closeRegisterModal} onRegisterResponse={handleRegisterResponse}/>
      <LoginModal closeloginModal={closeloginModal}/>
        <MessageModal messageData={message} closeMessageModal={closeMessageModal} />
    <div className="container-fluid">
      <Link className="navbar-brand me-auto" to='/'
        ><img src="../images/logo.png" style={{height: '70px'}} alt=""
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
          ><img src="../images/dark-mode.png" style={{height: '40px'}} alt=""
        /></a>
        <ul className="navbar-nav py-3">
          <li className="nav-item">
            {/* <Link className="nav-link" to='/album'>註冊</Link> */}
            <Link className="nav-link" onClick={openRegisterModal}>註冊</Link>
          </li>
          <li className="nav-item ms-lg-2">
            <a className="nav-link" onClick={openloginModal}>登入</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}
