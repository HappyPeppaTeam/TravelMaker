import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForumArticleList = () => {
    const [forumarticles, setForumariticles] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/TravelMaker/Backend/public/api/getBoardTextAndImage`)
            .then(response => {
                const sortedArticles = response.data.sort((a, b) => new Date(b.Posting_time) - new Date(a.Posting_time));
                const latestFiveArticles = sortedArticles.slice(0, 5);
                setForumariticles(latestFiveArticles);
            })
            .catch(error => {
                console.error('Error fetching forumarticles:', error.response.data);
            });
    }, []);

    return (
        <table className="table table-striped table-bordered mb-0">
            <tbody>
                <tr>
                    <th>標題</th>
                    <th>作者</th>
                    <th>發表日期</th>
                </tr>
                {forumarticles.map((article) => (

                    <tr key={article.board_text_id} className="discussion-page-list">
                        <td>
                            <Link to={`/forum/discussion/article/${article.board_text_id}`} className="d-flex" state={article.board_text_id}>
                                <div className="discussion-page-list-image" style={{ backgroundImage: `url(http://localhost/TravelMaker/Backend/public/storage/${article.image_path})`, backgroundSize: "cover"}}></div>
                                <div>
                                    <div className="discussion-page-list-title">
                                        <p>{article.Text_title}</p>
                                    </div>
                                    <p className="discussion-page-list-text">{article.Text}</p>
                                </div>
                            </Link>
                        </td>
                        <td className="discussion-page-list-author">{article.full_name}</td>
                        <td className="discussion-page-list-date">{article.Posting_time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ForumArticleList;