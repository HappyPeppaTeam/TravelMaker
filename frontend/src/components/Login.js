import React, { useState } from 'react';

const LoginModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  
    const login = () => {
      const userData = {
        username,
        password,
      };
      // Send the data to the backend using Fetch API
      fetch('http://localhost/public/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend, if needed
        console.log('Response from backend:', data);
      })
      .catch(error => {
        // Handle error, if any
        console.error('Error:', error);
      });
    };
  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100 text-center" id="exampleModalLabel">會員登入</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={login}>確認</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
