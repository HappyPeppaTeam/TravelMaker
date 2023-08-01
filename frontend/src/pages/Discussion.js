import '../css/Forumstyles.css';
import '../css/Discussion.css';

export default function Discussion() {
    return (
        <div className="main container">
            {/* <!-- 導覽列 --> */}
            <div className="discussion-board bg-blue-3 mx-0 row gy-2">
                <div className="sub-discussion-board col-6 col-md">
                    <button className="btn btn-secondary" type="button" id="defaultDropdown">
                        <a href="">首頁</a>
                    </button>
                </div>
                <div className="sub-discussion-board col-6 col-md">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="defaultDropdown"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="true"
                        aria-expanded="false"
                    >
                        北部討論版
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                        <li><a className="dropdown-item" href="#">北部綜合討論版</a></li>
                        <li><a className="dropdown-item" href="#">臺北市</a></li>
                        <li><a className="dropdown-item" href="#">新北市</a></li>
                        <li><a className="dropdown-item" href="#">宜蘭縣</a></li>
                        <li><a className="dropdown-item" href="#">基隆市</a></li>
                        <li><a className="dropdown-item" href="#">桃園市</a></li>
                        <li><a className="dropdown-item" href="#">新竹市</a></li>
                        <li><a className="dropdown-item" href="#">新竹縣</a></li>
                    </ul>
                </div>
                <div className="sub-discussion-board col-6 col-md">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="defaultDropdown"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="true"
                        aria-expanded="false"
                    >
                        中部討論版
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                        <li><a className="dropdown-item" href="#">中部綜合討論版</a></li>
                        <li><a className="dropdown-item" href="#">臺中市</a></li>
                        <li><a className="dropdown-item" href="#">苗栗縣</a></li>
                        <li><a className="dropdown-item" href="#">彰化縣</a></li>
                        <li><a className="dropdown-item" href="#">南投縣</a></li>
                        <li><a className="dropdown-item" href="#">雲林縣</a></li>
                    </ul>
                </div>
                <div className="sub-discussion-board col-6 col-md">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="defaultDropdown"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="true"
                        aria-expanded="false"
                    >
                        南部討論版
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                        <li><a className="dropdown-item" href="#">南部綜合討論版</a></li>
                        <li><a className="dropdown-item" href="#">嘉義市</a></li>
                        <li><a className="dropdown-item" href="#">嘉義縣</a></li>
                        <li><a className="dropdown-item" href="#">臺南市</a></li>
                        <li><a className="dropdown-item" href="#">高雄市</a></li>
                        <li><a className="dropdown-item" href="#">屏東縣</a></li>
                    </ul>
                </div>
                <div className="sub-discussion-board col-6 col-md">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="defaultDropdown"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="true"
                        aria-expanded="false"
                    >
                        花東離島討論版
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                        <li><a className="dropdown-item" href="#">花東離島綜合討論版</a></li>
                        <li><a className="dropdown-item" href="#">花蓮縣</a></li>
                        <li><a className="dropdown-item" href="#">臺東縣</a></li>
                        <li><a className="dropdown-item" href="#">澎湖縣</a></li>
                        <li><a className="dropdown-item" href="#">金門縣</a></li>
                        <li><a className="dropdown-item" href="#">連江縣</a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- 功能列 --> */}
            <div className="d-flex discussion-item">
                <button className="btn btn-primary">最新</button>
                <button className="btn btn-primary">精選</button>
                <button className="btn btn-primary ms-auto">
                    <a href="">我要發文</a>
                </button>
            </div>
            {/* <!-- 上分頁 --> */}
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

            {/* <!-- 討論串 --> */}
            <div className="row flex mx-0">
                <div className="tage col-12 col-lg-2 mx-0 my-0 bg-blue-2">
                    <div className="row">
                        <h2>標籤</h2>
                        <div className="form-check tag-item col-3 col-md col-lg-12">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="親子"
                                checked
                            />
                            <label className="form-check-label" for="親子"> 親子 </label>
                        </div>
                        <div className="form-check tag-item col-3 col-md col-lg-12">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="露營"
                                checked
                            />
                            <label className="form-check-label" for="露營"> 露營 </label>
                        </div>
                        <div className="form-check tag-item col-3 col-md col-lg-12">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="登山"
                                checked
                            />
                            <label className="form-check-label" for="登山"> 登山 </label>
                        </div>
                        <div className="form-check tag-item col-3 col-md col-lg-12">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="老街"
                                checked
                            />
                            <label className="form-check-label" for="老街"> 老街 </label>
                        </div>
                        <div className="form-check tag-item col-3 col-md col-lg-12">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="溫泉"
                                checked
                            />
                            <label className="form-check-label" for="溫泉"> 溫泉 </label>
                        </div>
                    </div>
                </div>

                <div className="discussion-page col-12 col-md col-lg mx-0 my-0 bg-blue-3">
                    <div className="row">
                        <div className="discussion-page-title"><h1>最新討埨串</h1></div>
                        <table className="table table-striped table-bordered">
                            <tbody>
                                <tr>
                                    <th>標題</th>
                                    <th>回覆</th>
                                    <th>點閱率</th>
                                    <th>發表日期</th>
                                </tr>
                                <tr className="discussion-page-list">
                                    <td>
                                        <a href="https://google.com" className="d-flex">
                                            <div
                                                className="discussion-page-list-image"
                                                style={{ backgroundImage: `url(${require("../images/taipei.jpg")})` }}></div>
                                            <div>
                                                <div className="discussion-page-list-title">
                                                    <p href="https://google.com">第一篇文章</p>
                                                </div>
                                                <p className="discussion-page-list-text">
                                                    AaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaa
                                                </p>
                                            </div>
                                        </a>
                                    </td>
                                    <td>user</td>
                                    <td>點閱率</td>
                                    <td>2023.7.20</td>
                                </tr>
                                <tr className="discussion-page-list">
                                    <td>
                                        <a href="https://google.com" className="d-flex">
                                            <div
                                                className="discussion-page-list-image"
                                                style={{ backgroundImage: `url(${require("../images/taipei.jpg")})` }}
                                            ></div>
                                            <div>
                                                <div className="discussion-page-list-title">
                                                    <p href="https://google.com">第二篇文章</p>
                                                </div>
                                                <p className="discussion-page-list-text">
                                                    AaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaa
                                                </p>
                                            </div>
                                        </a>
                                    </td>
                                    <td>user</td>
                                    <td>點閱率</td>
                                    <td>2023.7.20</td>
                                </tr>
                                <tr className="discussion-page-list">
                                    <td>
                                        <a href="https://google.com" className="d-flex">
                                            <div
                                                className="discussion-page-list-image"
                                                style={{ backgroundImage: `url(${require("../images/taipei.jpg")})` }} ></div>
                                            <div>
                                                <div className="discussion-page-list-title">
                                                    <p href="https://google.com">第三篇文章</p>
                                                </div>
                                                <p className="discussion-page-list-text">
                                                    AaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaa
                                                </p>
                                            </div>
                                        </a>
                                    </td>
                                    <td>user</td>
                                    <td>點閱率</td>
                                    <td>2023.7.20</td>
                                </tr>
                                <tr className="discussion-page-list">
                                    <td>
                                        <a href="https://google.com" className="d-flex">
                                            <div
                                                className="discussion-page-list-image"
                                                style={{ backgroundImage: `url(${require("../images/taipei.jpg")})` }}
                                            ></div>
                                            <div>
                                                <div className="discussion-page-list-title">
                                                    <p href="https://google.com">第四篇文章</p>
                                                </div>
                                                <p className="discussion-page-list-text">
                                                    AaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaa
                                                </p>
                                            </div>
                                        </a>
                                    </td>
                                    <td>user</td>
                                    <td>點閱率</td>
                                    <td>2023.7.20</td>
                                </tr>
                                <tr className="discussion-page-list">
                                    <td>
                                        <a href="https://google.com" className="d-flex">
                                            <div
                                                className="discussion-page-list-image"
                                                style={{ backgroundImage: `url(${require("../images/taipei.jpg")})` }}></div>
                                            <div>
                                                <div className="discussion-page-list-title">
                                                    <p href="https://google.com">第五篇文章</p>
                                                </div>
                                                <p className="discussion-page-list-text">
                                                    AaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaa
                                                </p>
                                            </div>
                                        </a>
                                    </td>
                                    <td>user</td>
                                    <td>點閱率</td>
                                    <td>2023.7.20</td>
                                </tr>
                                <tr className="discussion-page-list">
                                    <td>
                                        <a href="https://google.com" className="d-flex">
                                            <div
                                                className="discussion-page-list-image"
                                                style={{ backgroundImage: `url(${require("../images/taipei.jpg")})` }}
                                            ></div>
                                            <div>
                                                <div className="discussion-page-list-title">
                                                    <p href="https://google.com">第六篇文章</p>
                                                </div>
                                                <p className="discussion-page-list-text">
                                                    AaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaaAaaaaaaaaa
                                                </p>
                                            </div>
                                        </a>
                                    </td>
                                    <td>user</td>
                                    <td>點閱率</td>
                                    <td>2023.7.20</td>
                                </tr>
                            </tbody>
                        </table>
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
        </div >
    )
}