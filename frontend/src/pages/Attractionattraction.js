import { Link } from 'react-router-dom';
import '../css/attractions.css';
import '../css/bootstrap.css';
export default function Attractionattraction() {





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
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%', 'paddingLeft': '1%' }}><b>夜市</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line">
                            <h3>
                                more
                            </h3>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%', 'paddingLeft': '1%' }}><b>觀光工廠</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line">
                            <h3>
                                more
                            </h3>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%', 'paddingLeft': '1%' }}><b>港口</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line">
                            <h3>
                                more
                            </h3>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%', 'paddingLeft': '1%' }}><b>市集</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line">
                            <h3>
                                more
                            </h3>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%', 'paddingLeft': '1%' }}><b>購物</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line">
                            <h3>
                                more
                            </h3>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%', 'paddingLeft': '1%' }}><b>人文景點</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line">
                            <h3>
                                more
                            </h3>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <h3 style={{ 'float': 'left', 'paddingTop': '1%', 'paddingLeft': '1%' }}><b>自然景觀</b></h3>
                        <Link to="/attractions/Attractionmore" style={{ 'float': 'right', 'paddingTop': '1%', 'paddingLeft': '1%' }} className="bottom-line">
                            <h3>
                                more
                            </h3>
                        </Link>
                        <div style={{ 'clear': 'both' }}>
                            <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-3">
                                    <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                        <img className="img-thumbnail2" src="#" />
                                        <div>
                                            <b>日月潭</b>
                                            <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}