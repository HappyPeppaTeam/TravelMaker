import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForumCards = () => {
      const [forums, setForums] = useState([]);

      useEffect(() => {
        // 使用 Axios 從後端取得資料
        axios.get(`http://localhost/TravelMaker/Backend/public/api/getBoardTextAndImage`)
          .then(response => {
            setForums(response.data); // 假設 response.data 是一個包含討論區資訊的陣列
          })
          .catch(error => {
            console.error('取得資料時發生錯誤：', error);
          });
      }, []);

    return (
        <div className="row">
            {forums.map((forum, index) => {
                if (index <= 1) {
                    return (
                        <div key={forum.board_text_id} className="col-md-6 mb-1">
                            <div className="card forum">
                                <img src={require('../images/card-1.jpg')} className="card-img-top card-img-size" />
                                <div className="card-body">
                                    <h5 className="card-title">{forum.Text_title}</h5>
                                    <p className="card-text">{`${forum.Text.slice(0,200)}...`}</p>
                                </div>
                                <div className="card-body">
                                    <Link to={`/forum/discussion/article/${forum.board_text_id}`} className="card-link" state={forum.board_text_id}>連結</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default ForumCards;