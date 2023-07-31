import { Link } from 'react-router-dom';
import '../css/attractions.css';
import '../css/bootstrap.css';
export default function Attractionmore() {




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
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div style={{ 'paddingTop': '10px', 'paddingBottom': '5px' }}>
                            <Link to="/Attractionmore/Attraction_innerpage" className="bottom-line">
                                <fieldset className="rm-fieldset">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src="#" style={{ 'maxWidth': '100%' }} />
                                        </div>
                                        <div className="col-lg-8">
                                            <h3><b>台中火車站</b></h3>
                                            <p>新臺中火車站 台中都會區鐵路高架北起豐原站北側1.9公里，南迄大慶站南邊1.4公里，全長21.7公里，除將現有5座車站改建為高架車站，並增建栗林、頭家厝、松竹、精武及五 ...
                                            </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </Link>
                        </div>
                        <div className="pagination-wrapper">
                            <div className="pagination">
                                <Link to = "#">&laquo;</Link>
                                <Link to = "#" className="active">1</Link>
                                <Link to = "#">2</Link>
                                <Link to = "#">3</Link>
                                <Link to = "#">4</Link>
                                <Link to = "#">5</Link>
                                <Link to = "#">6</Link>
                                <Link to = "#">7</Link>
                                <Link to = "#">8</Link>
                                <Link to = "#">9</Link>
                                <Link to = "#">10</Link>
                                <Link to = "#">&raquo;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}