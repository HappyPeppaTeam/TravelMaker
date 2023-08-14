import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function ResetPassword() {
    //   const urlParams = new URLSearchParams(window.location.search);
    const { token } = useParams();
    //   console.log(urlParams);

    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleResetPassword = async () => {
        try {
            let label = '';
            let color = '';
            const response = await fetch('http://localhost/TravelMaker/Backend/public/api/resetPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, password }),
            });

            if (response.status === 200) {
                label = '密碼已重置'
                color = 'green';
                setMessage(<span style={{ color }}>{label}</span>);
                console.log('密碼已重置');
            } else {
                label = '密碼重置失敗'
                color = 'red';
                setMessage(<span style={{ color }}>{label}</span>);
                console.log('密碼重置失敗');
            }

        } catch (error) {
            console.log(error);
        }


    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <h1>重置密碼</h1>
                    <input
                        type="password"
                        placeholder="輸入新密碼"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn btn-primary btn-block" onClick={handleResetPassword}>重置密碼</button>
                    <div>{message}</div>
                </div>
            </div>
        </div>

    );
}

export default ResetPassword
