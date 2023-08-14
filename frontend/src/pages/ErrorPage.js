import React from 'react';
import { useParams } from 'react-router-dom';


const ErrorPage = () => {
    let errorMessage = '';
    const { errorCode } = useParams();
    const errorCodeNumber = parseInt(errorCode, 10);

    switch (errorCodeNumber) {
        case 401:
            
            errorMessage = 'Unauthorized: You do not have permission to access this resource.<br />沒有權限進入此頁面';
            break;
        case 404:
            errorMessage = 'Page not found';
            break;
        case 500:
            errorMessage = 'Internal server error';
            break;
        // 添加其他错误代码和对应的错误信息
        default:
            errorMessage = 'An error occurred';
            break;
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-6">
                    <div className="col-md-12">
                        <div className="card text-center">
                            <div className="card-body">
                                <h1 className="card-title text-danger">Error {errorCode}</h1>
                                {/* <p className="card-text text-muted">{errorMessage}</p>
                                 */}
                                 <div dangerouslySetInnerHTML={{ __html: errorMessage }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
