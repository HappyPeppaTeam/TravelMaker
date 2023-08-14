import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let label = ''
    let color = ''
    try {
      const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/forgotPassword', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        email: email,
      });
       label = response.data.message;
       color = 'green';
        setMessage(<span style={{ color }}>{label}</span>);
        

    } catch (error) {
      // Handle error, if any
      console.error(error);
      label = '找不到相關的記錄';
       color = 'red';
      setMessage(<span style={{ color }}>{label}</span>);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <h1 className="text-center mb-4">忘記密碼</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="輸入您的電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              提交
            </button>
            <div className="responseMessage">
              {message}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
