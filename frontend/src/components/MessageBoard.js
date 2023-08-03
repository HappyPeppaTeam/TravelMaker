import React, { useState } from "react";
import '../css/MessageBoard.css';

const MessageBoardInputComponent = () => {
    const [inputValue, setInputValue] = useState({
        message: "",
        username: "John Doe",
        photoPath: "../images/default-photo.jpg",
        userId: 1, // 預設使用者ID，根據實際需求更改
    });

    const [messages, setMessages] = useState([]);

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            message: e.target.value,
        });
    };

    const handleSubmit = () => {
        setMessages([...messages, inputValue]);

        fetch(`http://localhost/TravelMaker/Backend/routes/script.php?inputValue=${inputValue.message}`)
            .then((response) => response.text())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        setInputValue({
            ...inputValue,
            message: "",
        });
    };

    return (
        <div className="MessageBoardInputComponent">
            <div className="UserImage">
                <a href=""><img src={require('../images/headimage.jpg')} alt="" /></a>

                <form>
                    <input
                        className="MessageText"
                        type="text"
                        value={inputValue.message}
                        onChange={handleChange}
                    />
                    <input
                        className="MessageSubmit btn btn-primary"
                        type="button"
                        value="Submit"
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
                            <div className="Username">{`User ID: ${messageData.userId}`}</div>
                            <div className="MessageText">{messageData.message}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageBoardInputComponent;
