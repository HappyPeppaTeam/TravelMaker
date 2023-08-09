import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 导入 Bootstrap 样式
import 'bootstrap/dist/js/bootstrap.bundle.min'; // 导入 Bootstrap JavaScript

const MessageToast = ({ messageData, closemessageToast }) => {
  const toastRef = useRef(null);
  // function reload() {
  //   window.location.reload()
  // }
  return (
    <div aria-live="polite" aria-atomic="true" style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem', // Adjust the right positioning as needed
      zIndex: 1050
    }}
    >
      <div
        ref={toastRef}
        id="messageToast"
        className="toast align-items-center text-white bg-primary border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"

      >
        <div className="d-flex">
          <div className="toast-body">
            <p>{messageData}</p>
          </div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={closemessageToast}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default MessageToast;








