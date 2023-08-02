import '../css/restaurant.css';
export default function RestaurantComment() {
    return (
        <div className="main">

            <div className="p-3"><a className="rm-link-style" href="">餐廳</a>＞<a className="rm-link-style" href="">台中市</a>＞西屯區</div>

            <div id="rest-carousel" className="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#rest-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_1280.jpg"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_1280.jpg"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200_1280.jpg"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#rest-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#rest-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="p-rest">
                <h1 name="rest-name">森森燒肉</h1>
                <p name="point">★ ★ ★ ★ ☆ 9527條評論</p>
                <div className="d-flex flex-row">
                    <div className="p-2">408台中市南屯區黎明路二段382號 |</div>
                    <div className="p-2">04-22582302 |</div>
                    <div className="p-2">營業時間 : 11:00~22:00 |</div>
                    <div className="p-2">官方網站 : <a className="rm-link-style" href="">www.1234.com</a></div>
                </div>
            </div>
            <div className="row p-rest">
            <div className="col-12 p-3">
                <div className="card p-3">
                    <h3>所有評論</h3>
                    <div id="first-comment">
                    <div className="d-flex flex-row">
                            <div className="p-2" style={{width: '70px'}}><img id="user-img" src="../images/logo.png" className="rounded-circle" style={{width: '50px', height: '50px', objectFit: 'cover'}} alt=""/></div>
                            <div className="p-2">★ ★ ★ ★ ☆ 一年前 </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2" style={{width: '70px'}}>陳先生</div>
                            <div className="p-2">這邊是留下的所有評論</div>
                        </div>
                    </div>
                    <hr/>
                    <div id="second-comment">
                        <div className="d-flex flex-row">
                            <div className="p-2" style={{width: '70px'}}><img id="user-img" src="../images/logo.png" className="rounded-circle" style={{width: '50px', height: '50px', objectFit: 'cover'}} alt=""/></div>
                            <div className="p-2">★ ★ ★ ★ ☆ 一年前 </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2" style={{width: '70px'}}>陳先生</div>
                            <div className="p-2">這邊是留下的所有評論</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        </div>
    )
}