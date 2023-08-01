import React, { useState } from "react";
import '../css/MessageBoard.css';

const MessageBoardInputComponent = () => {
    const [inputValue, setInputValue] = useState({
        message: "",
    });

    const handleChange = (e) => {
        setInputValue(
            {message: e.target.value}
        );
    };
    const handleSubmit = () => {
        fetch(`http://localhost/TravelMaker/Backend/routes/script.php?inputValue=${inputValue}`)
            .then((response) => response.text())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
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
            <div id="mess">{inputValue.message}</div>
        </div>
    );
};
export default MessageBoardInputComponent;