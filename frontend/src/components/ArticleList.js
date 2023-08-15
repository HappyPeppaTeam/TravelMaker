import React from 'react';
import { Link } from 'react-router-dom';


const DiscussionArticleList = ({Article}) => {
    return (
        <table className="table table-striped table-bordered mb-0">
            <tbody>
                <tr>
                    <th>標題</th>
                    <th>作者</th>
                    <th>發表日期</th>
                </tr>
                {Article.map((article) => (
                    <tr key={article.board_text_id} className="discussion-page-list">
                        <td>
                            <Link to={`/forum/discussion/article/${article.board_text_id}`} className="d-flex" state={article.board_text_id}>
                                <div className="discussion-page-list-image" style={{ backgroundImage: `url(http://localhost/TravelMaker/Backend/public/storage/${article.image_path})` }}></div>
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

export default DiscussionArticleList;
