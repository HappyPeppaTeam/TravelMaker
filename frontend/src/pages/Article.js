import '../css/Forumstyles.css';
import '../css/Article.css';
import MessageBoard from "../components/MessageBoard";

export default function Article() {

    return (
        <div className="main">
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
            {/* <!-- 文章 --> */}
            <section
                className="container Article-page"
                style={{ border: "1px saddlebrown solid" }}
            >
                <div className="row">
                    {/* <!-- user --> */}
                    <div
                        className="col-12 col-lg-3 col-xl-2 Article-user"
                        id=""
                        style={{ border: "1px red solid" }}
                    >
                        <div className="Article-user-card">
                            <a href="" target="_blank">
                                <img className="" src={require('../images/headimage.jpg')} alt="" />
                            </a>
                            <div className="Article-user-item">
                                <div className="Article-user-item-username">
                                    <a href="" target="_blank">UserID</a>
                                    <p>註冊日期</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 文章內容 --> */}
                    <div
                        className="col-12 col-lg-9 col-xl-10 Article-information-main"
                        style={{ border: "1px blue solid", backgroundColor: "aquamarine" }}
                    >
                        <div
                            className="Article-information-main-header"
                            style={{ border: "1px seagreen solid" }}
                        >
                            <h1>文章標題</h1>
                            <div>
                                <span>發文時間</span>
                                <span>點閱率</span>
                            </div>
                        </div>
                        <hr />
                        <div
                            className="Article-information-main-body"
                            style={{ border: "1px blue solid" }}
                        >
                            <div>文章內容</div>
                        </div>
                        <hr />
                        <div
                            className="Article-information-main-footer"
                            style={{ border: "1px blueviolet solid" }}
                        >
                            <div className="Article-information-main-footer-left">
                                <button className="btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-hand-thumbs-up"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                                        />
                                    </svg>
                                </button>
                                <button className="btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-heart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="Article-information-main-footer-right">
                                <button className="btn">回覆</button>
                            </div>
                        </div>
                        <div
                            className="Article-information-footer-messageboard"
                            style={{ border: "1px gold solid", backgroundColor: "aliceblue" }}
                        >
                            <div
                                className="Article-information-footer-messageboard"
                                style={{ border: "1px firebrick solid", height: "20px" }}
                            ></div>
                            <div
                                className="Article-information-footer-messageboard-user"
                                style={{ border: "1px khaki solid" }}
                            >
                                <MessageBoard></MessageBoard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}