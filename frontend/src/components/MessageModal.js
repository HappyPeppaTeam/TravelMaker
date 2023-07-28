
const MessageModal = ({messageData,closeMessageModal}) => {
  return (
    <div className="modal fade" id="messageModal" tabIndex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100 text-center" id="messageModalLabel">訊息通知</h5>
            <button type="button" className="btn-close" onClick={closeMessageModal}></button>
          </div>
          <div className="modal-body">
          <p>{messageData}</p>
        </div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={closeMessageModal}>確認</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
