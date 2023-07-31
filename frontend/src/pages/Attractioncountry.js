import { Link } from 'react-router-dom';
import '../css/attractions.css';
import '../css/bootstrap.css';
export default function Attractioncountry() {




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
            <div style={{ 'display': 'grid', 'backgroundColor': '#487797' }}>
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
                    <div className="container image-container">
                        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/attractions/Attractionmore">
                                    <img className="img-thumbnail2" src="#" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}