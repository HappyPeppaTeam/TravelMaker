import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { memberValidateField, registerFormValidate, calculatePasswordStrength, getPasswordStrengthLabel } from './MemberValidation'

const RegisterModal = ({ onResponse, closeRegisterModal, openMessageToast }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    nickName: '',
    birthday: '',
    gender: '',
  });
  const [passwordStrength, setPasswordStrength] = useState(0);

  const hoverPointerStyle = {
    cursor: 'pointer',
    color: 'blue',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: 'scale(1)',
  };


  const handleGoogle = () => {
    window.location.href = 'http://localhost/TravelMaker/Backend/public/api/auth/google';
  };

  const handleBlur = (event) => {
    const { id, value } = event.target;
    const errorMessage = memberValidateField(id, value, password)
    setErrors({
      ...errors,
      [id]: errorMessage,
    });
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const strength = calculatePasswordStrength(newPassword);
    setPasswordStrength(strength);
  };

  const register = async () => {
    const userData = new FormData();
    userData.append('username', username)
    userData.append('password', password)
    userData.append('confirmPassword', confirmPassword)
    userData.append('fullName', fullName)
    userData.append('nickName', nickName)
    userData.append('email', email)
    userData.append('birthday', birthday)
    userData.append('gender', gender)
    if (registerFormValidate(userData)) {
      try {
        const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/register', userData, {
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
        // sessionStorage.setItem('username', userData.username);
        const data = response.data.message;
        // Handle the response from the backend, if needed
        onResponse(data);
        closeRegisterModal();
        openMessageToast();
        console.log('Response from backend:', data);
      } catch (error) {
        // Handle error, if any
        closeRegisterModal();
        console.error(error);
      }
    } else {
      setRegisterError('請檢查資料是否輸入正確');
    }
  }



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
              <input type="text" className="form-control" id="username"
                placeholder="Username" aria-label="Username"
                aria-describedby="basic-addon1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={handleBlur} />
            </div>
            <div className="error-message text-danger">{errors.username}</div>
            <div className="input-group mb-3 me-3">
              <span className="input-group-text" id="basic-addon1">會員密碼</span>
              <input type="password" className="form-control" id="password"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handleBlur} />
              <div className="mx-3">密碼強度：{getPasswordStrengthLabel(passwordStrength)}</div>
            </div>
            <div className="error-message text-danger">{errors.password}</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">確認密碼</span>
              <input type="password" className="form-control" id="confirmPassword"
                placeholder="Confirm Password" aria-label="Confirmassword" aria-describedby="basic-addon1"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleBlur} />
            </div>
            <div className="error-message text-danger">{errors.confirmPassword}</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">會員姓名</span>
              <input type="text" className="form-control" id="fullName"
                placeholder="FullName" aria-label="fullName" aria-describedby="basic-addon1"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={handleBlur} />
            </div>
            <div className="error-message text-danger">{errors.fullName}</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">暱稱</span>
              <input type="text" className="form-control" id="nickName"
                placeholder="NickName" aria-label="nickName" aria-describedby="basic-addon1"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                onBlur={handleBlur} />
            </div>
            <div className="error-message text-danger">{errors.nickName}</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Email</span>
              <input type="email" className="form-control" id="email"
                placeholder="Email" aria-label="email" aria-describedby="basic-addon1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur} />
            </div>
            <div className="error-message text-danger">{errors.email}</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">生日</span>
              <input type="date" className="form-control" id="birthday"
                placeholder="birthday" aria-label="birthday" aria-describedby="basic-addon1"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                onBlur={handleBlur} />
            </div>
            <div className="error-message text-danger">{errors.birthday}</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">性別</span>
              <select className="form-select" name="gender" id="gender"
                aria-label="Default select example"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                onBlur={handleBlur}>
                <option value="">選取性別</option>
                <option value="1">男</option>
                <option value="2">女</option>
                <option value="3">其他</option>
              </select>
            </div>
          </div>
          <div className="error-message text-danger">{errors.gender}</div>
          <div className="modal-footer justify-content-center">
            <div>
              快速註冊：<i className="bi bi-google" style={hoverPointerStyle} onClick={handleGoogle}></i>
            </div>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" className="btn btn-primary" onClick={register}>確認</button>
            <div className="error-message text-danger">{registerError}</div>
          </div>
          {/* data-bs-dismiss="modal" */}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
