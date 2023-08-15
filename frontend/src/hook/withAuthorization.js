import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const withAuthorization = (allowedRoles) => (WrappedComponent) => {
  const AuthHOC = (props) => {
    // 在这里获取用户权限信息，比如从上下文或状态中获取
    let userRoles='';
    //權限判斷
    if(Cookies.get('role')){
       userRoles = Cookies.get('role');
    }else{
       userRoles = 'guest'
    }
    
    const navigate = useNavigate();

    // 检查用户权限是否允许访问
    const isAuthorized = allowedRoles.some(role => userRoles.includes(role));

    useEffect(() => {
      if (!isAuthorized) {
        // 如果没有权限，在 useEffect 中执行重定向
        navigate('/ErrorPage/401');
      }
    }, [isAuthorized, navigate]);

    return isAuthorized ? <WrappedComponent {...props} /> : null;
  };

  return AuthHOC;
};

export default withAuthorization;
