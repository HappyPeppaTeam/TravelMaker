import { Link } from 'react-router-dom';
import '../css/attractions.css';
import '../css/bootstrap.css';
//要外接東西
export default function Attraction_innerpage() {





    return (
        <>
            <div className="backgroundmountain" style={{ 'backgroundImage': 'url()' }}>
                <input className="search-bar" type="text" name="search" id="search" placeholder="搜尋欄" />
                <div className="container hyperlink-location" >
                    <Link to="#" className="button-hyperlink">餐廳</Link>
                    <Link to="/attractions" className="button-hyperlink">景點</Link>
                    <Link to="#" className="button-hyperlink">討論區</Link>
                    <Link to="#" className="button-hyperlink">自助旅遊排程</Link>
                </div>
            </div>
            <div style={{ 'display': 'grid' }}>
                <div className="container-fluid d-flex m-0 p-0">
                    <div className="sidenav">
                        <h3 style={{ 'color': 'black' }}><b>種類</b></h3>
                        <Link to="/attractions/Attractionmore">夜市</Link>
                        <Link to="/attractions/Attractionmore">觀光工廠</Link>
                        <Link to="/attractions/Attractionmore">港口</Link>
                        <Link to="/attractions/Attractionmore">市集</Link>
                        <Link to="/attractions/Attractionmore">購物</Link>
                        <Link to="/attractions/Attractionmore">人文景點</Link>
                        <Link to="/attractions/Attractionmore">自然景觀</Link>
                        <h3 style={{ 'color': 'black' }}><b>地區</b></h3>
                        <button className="dropdown-btn">基隆
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">台北
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">新北
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">桃園
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">新竹
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">苗栗
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">台中
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">彰化
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">南投
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">雲林
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">嘉義
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">台南
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">高雄
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">屏東
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">台東
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">花蓮
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">宜蘭
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">澎湖
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">金門
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <button className="dropdown-btn">馬祖
                        </button>
                        <div className="dropdown-container">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="container">
                        <h4>
                            <b><Link to="/attractions" className="bottom-line">景點</Link></b>
                            <b>→</b>
                            <b><Link to="/attractions/Attractionmore" className="bottom-line">南投</Link></b>
                            <b>→</b>
                            <b><Link to="/attractions/Attractionmore" className="bottom-line">魚池鄉</Link></b>
                            <b>→</b>
                            <b className="bottom-line">日月潭</b>
                        </h4>
                        <div id="attractionpicture" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"
                            style={{ 'backgroundColor': 'black' }}>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#attractionpicture" data-bs-slide-to="0" className="active" aria-current="true"
                                    aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#attractionpicture" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#attractionpicture" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="#" />
                                </div>
                                <div className="carousel-item">
                                    <img src="#" />
                                </div>
                                <div className="carousel-item">
                                    <img src="#" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#attractionpicture" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#attractionpicture" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div style={{ 'display': 'flex' }}>
                            <h1>
                                <b>
                                    日月潭 Zintun ★ ★ ★ ☆ ☆
                                </b>
                            </h1>
                            <svg id="colorChangeSVG" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16" style={{ 'marginLeft': 'auto', 'paddingTop': '5px' }}>
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z"
                                    className="fill-area" />
                            </svg>
                            <script src="your_script.js"></script>
                            <h2>我的最愛</h2>
                        </div>
                        <h5>
                            日月潭（邵語：Zintun或Zintun a
                            Wazaqan），是一個位在臺灣南投縣魚池鄉日月村的半天然淡水湖泊兼水力發電用水庫；該潭是臺灣本島面積第二大的湖泊（僅次於曾文水庫）及第一大半天然湖泊兼發電用水庫。該潭平均水面海拔約736公尺，常態面積約7.93平方公里（滿水位時約8.4平方公里），最高水深達27公尺。其蘊含自然生態豐富，但其中有非常多是外來種生物。

                            該潭是台灣平埔族的邵族，所生活的主要地區之一，屬於邵族傳統領域；生活在該潭四周的族人稱其為「水社海」。由於過去當地附近平埔族稱居住於山裡的高山族，為「沙連」，當地又是山區最大的積水盆地，日月潭及其周圍地區因而得名「水沙連」。此外，尚有「水社大湖」、「龍湖」、「珠潭」、「雙潭」等名稱。其今名為日潭與月潭之合稱，該二名分別來自對其兩大組成部份水色及輪廓的描繪。同時，該潭景色自古以來經常受人讚賞，並自日本統治時期以來多次被有關當局列入臺灣八景。

                            2000年1月，交通部觀光局設立日月潭國家風景區，其範圍除原有日月潭特定區外，北面擴大至魚池鄉，東至水社大山，西至集集大山，南至水里蛇窯。

                            2016年3月，該潭與日本靜岡縣濱名湖締結為姐妹湖。.
                        </h5>
                        <hr className='inner-pagger-border'></hr>
                        <div className='row'>
                            <div className='col-6' >
                                <h3><b>資訊</b></h3>
                                <hr style={{ 'border': '1px solid black' }}></hr>
                                <p><h5>地址:555203南投縣魚池鄉中山路599號</h5></p>
                                <hr style={{ 'border': '1px solid black' }}></hr>
                                <p><h5>電話:886-49-2855668</h5></p>
                                <hr style={{ 'border': '1px solid black' }}></hr>
                                <p style={{ 'float': 'left' }}>官網:</p>
                                <Link to="" style={{ 'textDecoration': 'none' }}><h5>日月潭國家風景區</h5></Link>
                                <hr style={{ 'border': '1px solid black' }}></hr>
                                <p><h5>開放時間</h5></p>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週一</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週二</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週三</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週四</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週五</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週六</p>
                                    <p>8:00-21:00</p>
                                </div>
                                <div style={{ 'display': 'flex' }}>
                                    <p>週日</p>
                                    <p>8:00-21:00</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ 'marginLeft': '10%' }}>
                                    <h3><b>交通資訊</b></h3>
                                    <hr style={{ 'border': '1px', 'solid': 'black', 'width': '100%' }}></hr>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29192.41292360597!2d120.89785279050786!3d23.852300830442857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d5e076ee0005%3A0xec17a6fd5312a528!2z5pel5pyI5r2t!5e0!3m2!1szh-TW!2stw!4v1690119779818!5m2!1szh-TW!2stw"
                                        width="500" height="250" style={{ 'border': '0' }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div style={{ 'marginLeft': '10%', 'paddingTop': '1%' }}>
                                    <h6>
                                        從臺北南下
                                        路線A：

                                        （國道3號）→霧峰系統交流道（國道6號）→愛蘭交流道下（接省道台14線往埔里）→埔里（接省道台21 線）→魚池→日月潭

                                        路線B：

                                        （國道1號）→彰化系統（國道3號）南下→霧峰系統交流道（國道6號）→愛蘭交流道下（接省道台14線往埔里）→埔里（接省道台21線）→魚池→日月潭

                                        路線C：

                                        國道3號→草屯交流道下（接省道台14線）往埔里→埔里（接省道台21線）→魚池→日月潭
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <hr className="inner-pagger-border"></hr>
                        <div style={{ 'clear': 'both' }}>
                            <fieldset className="rm-fieldset attraction-message">
                                <img className="img-fluid-message" src="#" />
                                <div style={{ 'paddingTop': '10px' }}>
                                    <p style={{ 'float': 'left' }}>魯夫</p>
                                    <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                    <p>★ ★ ★ ☆ ☆</p>
                                </div>
                                <div>
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
                                </div>
                            </fieldset>
                            <fieldset className="rm-fieldset attraction-message">
                                <img className="img-fluid-message" src="#" />
                                <div style={{ 'paddingTop': '10px' }}>
                                    <p style={{ 'float': 'left' }}>魯夫</p>
                                    <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                    <p>★ ★ ★ ☆ ☆</p>
                                </div>
                                <div>
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
                                </div>
                            </fieldset>
                            <fieldset className="rm-fieldset attraction-message">
                                <img className="img-fluid-message" src="#" />
                                <div style={{ 'paddingTop': '10px' }}>
                                    <p style={{ 'float': 'left' }}>魯夫</p>
                                    <time style={{ 'paddingLeft': '20px', 'paddingRight': '20px', 'float': 'left' }}>2011-01-28</time>
                                    <p>★ ★ ★ ☆ ☆</p>
                                </div>
                                <div>
                                    <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                    </p>
                                </div>
                            </fieldset>
                        </div>
                        <button id="openReviewModal"
                            style={{ 'borderRadius': '12px', 'marginBottom': '5px', 'padding': '10px 25px', 'float': 'left' }}>寫評論
                        </button>
                        <div className="review-modal">
                            <h3>評論和評分</h3>
                            <div className="rating">
                                <span><i className="fas fa-star" data-rating="5"></i></span>
                                <span><i className="fas fa-star" data-rating="4"></i></span>
                                <span><i className="fas fa-star" data-rating="3"></i></span>
                                <span><i className="fas fa-star" data-rating="2"></i></span>
                                <span><i className="fas fa-star" data-rating="1"></i></span>
                            </div>
                            <textarea id="comment" name="comment" rows="4" cols="50" placeholder="請輸入評論"></textarea>
                            <input type="file" id="image" name="image" accept="image/*" style={{ 'paddingTop': '5px' }} />
                            <button id="submitReview">提交</button>
                            <button id="cancelReview">取消</button>
                        </div>
                        <div><Link to="/Attraction_innerpage/Attraction_forun" style={{ 'float': 'right' }} className="bottom-line" target="_blank">more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}