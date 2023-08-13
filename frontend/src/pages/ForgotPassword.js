import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/TravelMaker/Backend/public/api/forgotPassword', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        email: email,
      });

      if (!response.status === 200) {
        throw new Error('Network response was not ok');
      }
      const data = response.data.message;
      // Handle the response from the backend, if needed
    
     
      console.log('Response from backend:', data, );
    } catch (error) {
      // Handle error, if any
    
      console.error(error);
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
