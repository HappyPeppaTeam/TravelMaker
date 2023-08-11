import React, { useState, useEffect } from "react";
import "../css/MessageBoard.css";
import axios from "axios";

const MessageBoardInput = () => {
  const [inputValue, setInputValue] = useState({
    message_text: "",
    username: "",
    photoPath: "",
    user_id: "",
    boardTextId: "", // 新增一个 boardTextId
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 在組件載入時從後端獲取資料
    axios
      .get("http://localhost/TravelMaker/Backend/public/api/getMessage/1")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("获取数据错误：", error);
      });
  }, []);

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      message_text: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post(
        `http://localhost/TravelMaker/Backend/public/api/getMessage/1}`,
        {
          message_text: inputValue.message_text,
          username: inputValue.username,
          photoPath: inputValue.photoPath,
          user_id: inputValue.user_id,
        }
      )
      .then((response) => {
        console.log(response.data); // 根据需要处理响应数据
        // 在成功提交後從後端重新獲取數據並更新 messages 狀態
        axios
          .get("http://localhost/TravelMaker/Backend/public/api/getMessage")
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
      message_text: "",
    });
  };

  return (
    <div className="MessageBoardInput">
      <div className="UserImage">
        <a href="">
          <img src={require("../images/headimage.jpg")} alt="" />
        </a>

        <form>
          <input
            className="MessageText"
            type="text"
            value={inputValue.message_text}
            onChange={handleChange}
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
            <div className="UserImage">
              <img src={messageData.photoPath} alt="" />
            </div>
            <div className="MessageContent">
              <div className="Username">{`用户ID${messageData.user_id}`}</div>
              <div className="MessageText">{messageData.message_text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoardInput;