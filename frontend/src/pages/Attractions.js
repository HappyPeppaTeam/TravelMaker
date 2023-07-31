import { Link } from 'react-router-dom';
import '../css/attractions.css';

export default function Attractions() {



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
            <div style={{ 'paddingTop': '1%' }} className="image-container">
                <div className="container">
                    <h3 style={{ 'float': 'left' }}>推薦景點</h3>
                    <Link to="/attractions/Attractionmore" style={{ 'float': 'right' }} className="bottom-line">more</Link>
                </div>
                <div className="container" style={{ 'clear': 'both' }}>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ 'paddingTop': '1%' }} className="image-container">
                <div className="container">
                    <h3 style={{ 'float': 'left' }}>依地區分類</h3>
                    <Link to="/attractions/Attractioncountry" style={{ 'float': 'right' }} className="bottom-line">more</Link>
                </div>
                <div className="container" style={{ 'clear': 'both' }}>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col-lg-3">
                            <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="#" />
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="#" />
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="#" />
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/attractions/Attractionmore" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="#" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ 'paddingTop': '1%' }} className="image-container">
                <div className="container">
                    <h3 style={{ 'float': 'left' }}>依種類分類</h3>
                    <Link to="/attractions/Attractionattraction" style={{ 'float': 'right' }} className="bottom-line">more</Link>
                </div>
                <div className="container" style={{ 'clear': 'both' }}>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ 'paddingTop': '1%' }} className="image-container">
                <div className="container">
                    <h3 style={{ 'float': 'left' }}>其他用戶收藏</h3>
                    <Link to="/attractions/Attractionmore" style={{ 'float': 'right' }} className="bottom-line">more</Link>
                </div>
                <div className="container" style={{ 'clear': 'both' }}>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="/Attractionmore/Attraction_innerpage" style={{ 'textDecoration': 'none', 'color': 'black' }}>
                                <img style={{ 'maxWidth': '100%' }} src="./src/images/taiwan.jpg" />
                                <div>
                                    <b>日月潭</b>
                                    <p>★ ★ ★ ☆ ☆&nbsp;&nbsp;9527條評論<br />南投縣 魚池鄉<br /></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}