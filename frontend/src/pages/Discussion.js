import '../css/Forumstyles.css';
import '../css/Discussion.css';
import ArticleList from '../components/ArticleList';
import DiscussionBoard from '../components/DiscussionBoardList';
import React from 'react';
import axios from 'axios';

import { Link, useLocation } from 'react-router-dom';


export default function Discussion() {
    let { state } = useLocation();
    const { useState, useEffect } = React;
    const [data, setData] = useState([]);
    
    useEffect(() => {
        (async() => {
            await axios.get(`http://localhost/TravelMaker/Backend/public/api/getArticle/${state}`)
    
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        })();
    }, [state])
    return (
        <div className="main">
            {/* <!-- 導覽列 --> */}
            <DiscussionBoard></DiscussionBoard>
            <div className="container">
                {/* <!-- 功能列 --> */}
                <div className="d-flex discussion-item">
                    <button className="btn btn-primary">最新</button>
                    <button className="btn btn-primary">精選</button>
                    <button className="btn btn-primary ms-auto">
                        <Link to="/forum/discussion/addarticle">我要發文</Link>
                    </button>
                </div>
                {/* <!-- 上分頁 --> */}
                {/* <div className="page">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div> */}

                {/* <!-- 討論串 --> */}
                <div className="row flex mx-0">
                    <div className="tage col-12 col-lg-2 mx-0 my-0 bg-blue-2">
                        <div className="row">
                            <h2>標籤</h2>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="1"
                                    id="親子"
                                />
                                <label className="form-check-label" htmlFor="親子"> 親子 </label>
                            </div>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="2"
                                    id="露營"

                                />
                                <label className="form-check-label" htmlFor="露營"> 露營 </label>
                            </div>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="3"
                                    id="登山"

                                />
                                <label className="form-check-label" htmlFor="登山"> 登山 </label>
                            </div>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="4"
                                    id="老街"

                                />
                                <label className="form-check-label" htmlFor="老街"> 老街 </label>
                            </div>
                            <div className="form-check tag-item col-3 col-md col-lg-12">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="5"
                                    id="溫泉"

                                />
                                <label className="form-check-label" htmlFor="溫泉"> 溫泉 </label>
                            </div>
                        </div>
                    </div>

                    <div className="discussion-page col-12 col-md col-lg mx-0 my-0 bg-blue-3">
                        <div className="row">
                            <div className="discussion-page-title"><h1>最新討埨串</h1></div>
                            <ArticleList Article={data}></ArticleList>
                        </div>
                    </div>
                </div>
                {/* <!-- 下分頁 --> */}
                <div className="page">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    )
}