import React, { useState, useEffect } from "react";
import "../css/MessageBoard.css"; 
import axios from "axios";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

const MessageBoardInput = ({ board_text_id }) => {
  const [inputValue, setInputValue] = useState({
    messageText: "",
  });
  let { state } = useLocation();

  const userId = Cookies.get('userId');

  const [messages, setMessages] = useState([]);
  const [userPhoto, setUserphoto] = useState([]);

  // console.log(userPhoto);

  useEffect(async () => {
    // 在組件載入時從後端獲取資料
    await axios
      .get(`http://localhost/TravelMaker/Backend/public/api/getMessage/${state}`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("获取数据错误：", error);
      });
    await axios
      .post(`http://localhost/TravelMaker/Backend/public/api/getMessagerPhoto`, { userId })
      .then((response) => {
        setUserphoto(response.data);
      })
      .catch((error) => {
        console.error("获取数据错误：", error);
      });


  }, []);

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      messageText: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post(
        `http://localhost/TravelMaker/Backend/public/api/postMessage`,
        {
          boardTextId: board_text_id,
          messageText: inputValue.messageText,
          userId: userId,
        }
      )
      .then((response) => {
        console.log(response.data); // 根据需要处理响应数据
        // 在成功提交後從後端重新獲取數據並更新 messages 狀態
        axios
          .get(`http://localhost/TravelMaker/Backend/public/api/getMessage/${state}`)
          .then((response) => {
            setMessages(response.data);
          })
          .catch((error) => {
            console.error("获取数据错误：", error);
          });
      })
      .catch((error) => {
        console.error("错误：", error);
      });

    setInputValue({
      ...inputValue,
      messageText: "",
    });
  };

  return (
    <div className="MessageBoardInput-main">
      <div className="UserImage">
        <a href="">
          {userId ? (
            <img src={`http://localhost/TravelMaker/Backend/public/storage/${userPhoto[0]?.head_photo}`} alt="" />
          ) : (
            <img src={require("../images/headimage.jpg")} alt="" />
          )}
        </a>

        <form>
          <input
            className="MessageText"
            type="text"
            value={inputValue.messageText}
            onChange={handleChange}
            id="MessageRe"
          />
          <input
            className="MessageSubmit btn btn-primary"
            type="button"
            value="提交"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div>
        {messages.map((messageData, index) => (
          <div key={index} className="Message">
            <div className="Message-item">
              <div className="UserImage">
                <img src={`http://localhost/TravelMaker/Backend/public/storage/${messageData.head_photo}`} alt="" />
              </div>
              <div className="Message-user">
                <div className="Username">{`${messageData.full_name}`}</div>
                <div className="MessageTime">{messageData.message_time}</div>
              </div>
            </div>
            <div className="Message-text">
              <div className="MessageText">{messageData.message_text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoardInput;