import React, { useState } from 'react';
import axios from 'axios';

const LoginModal = ({ closeloginModal, onResponse, openMessageToast }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      // window.location.reload()
      // var token = response.data.token;
      // document.cookie = `token=${token}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/localhost:3000`;
      localStorage.setItem('username', userData.username);
      const data = response.data.message;
      // Handle the response from the backend, if needed
      onResponse(data);
      closeloginModal();
      openMessageToast();
      console.log('Response from backend:', data,sessionStorage.getItem('username'));
    } catch (error) {
      // Handle error, if any
      closeloginModal();
      openMessageToast();
      console.error(error);
    }



    // Send the data to the backend using Fetch API
    // fetch('http://localhost/public/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userData),
    // })
    //   .then(response => {
    //     // 检查状态码
    //     if (!response.ok) {
    //       // 抛出自定义错误对象，后面的 catch 块会捕获该错误并处理
    //       throw new Error('Network response was not ok');

    //     }
    //     const cookies = response.headers.get('Set-Cookie');
    //     console.log(cookies);
    //     // document.cookie = `token=${token}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
    //     // 这里你可以继续处理响应数据
    //     return response.json();
    //   })
    //   .then(data => {
    //     // Handle the response from the backend, if needed

    //     onResponse(data);
    //     closeloginModal();
    //     openMessageToast();
    //     console.log('Response from backend:', data);
    //   })
    //   .catch(error => {
    //     // Handle error, if any
    //     closeloginModal();
    //     openMessageToast();
    //     console.error(error);
    //   });
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
            快速登入：<i className="bi bi-google"></i>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" className="btn btn-primary" onClick={login}>確認</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
