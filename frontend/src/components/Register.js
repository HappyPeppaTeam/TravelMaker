import React, { useState } from 'react';

// const handleGoogleRegister = () => {
//   // 將使用者導向 Google 登入畫面，取得授權
//   window.location.href = 'YOUR_GOOGLE_AUTH_URL'; // 你需要提供授權的網址
// };

const RegisterModal = ({onRegisterResponse}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  
    const register = () => {
      const userData = {
        username,
        password,
        confirmPassword,
        fullName,
        nickName,
        email,
        birthday,
        gender,
      };
      // Send the data to the backend using Fetch API
      fetch('http://localhost/public/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend, if needed
        onRegisterResponse(data);
        console.log('Response from backend:', data);
      })
      .catch(error => {
        // Handle error, if any
        console.error('Error:', error);
      });
    };

  return (
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100 text-center" id="registerModalLabel">會員註冊</h5>
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
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">確認密碼</span>
              <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" aria-label="Confirmassword" aria-describedby="basic-addon1" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">會員姓名</span>
              <input type="text" className="form-control" id="fullName" placeholder="FullName" aria-label="fullName" aria-describedby="basic-addon1" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">暱稱</span>
              <input type="text" className="form-control" id="nickName" placeholder="NickName" aria-label="nickName" aria-describedby="basic-addon1" value={nickName} onChange={(e) => setNickName(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Email</span>
              <input type="email" className="form-control" id="email" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">生日</span>
              <input type="date" className="form-control" id="birthday" placeholder="birthday" aria-label="birthday" aria-describedby="basic-addon1" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">性別</span>
              <select className="form-select" name="gender" id="gender" aria-label="Default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">選取性別</option>
                <option value="1">男</option>
                <option value="2">女</option>
                <option value="3">其他</option>
              </select>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <div>
              快速註冊：<i className="bi bi-google"></i>
            </div>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" className="btn btn-primary" onClick={register}  data-bs-dismiss="modal">確認</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
