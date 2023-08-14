import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LogoutModal = ({ closelogoutModal, onResponse, openMessageToast }) => {
  let data={}
  data['token'] = Cookies.get('token')
  const logout = () => {
    axios.post('http://localhost/TravelMaker/Backend/public/api/logout',data) // 发起登出请求
      .then(response => {
        // 清除前端 cookie
        console.log(response.data[0].unset_result);
        if (response.data[0].unset_result === 0) {
          Cookies.remove('token')
          Cookies.remove('role')
          Cookies.remove('username')
          Cookies.remove('fullName')
          Cookies.remove('userId')
          onResponse('登出成功');
          openMessageToast();
          
        }
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100 text-center" id="ModalLabel">是否要登出？</h5>
            <button type="button" className="btn-close" onClick={closelogoutModal}></button>
          </div>
          <div className="modal-body">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={logout}>確認</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
