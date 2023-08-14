import '../css/restaurant.css';
import { Link } from 'react-router-dom';
export default function RestaurantArea() {
    return (
        <div class="rest-main">
            <div class="container">
                <div className="p-4"><Link className="rm-link-style" to="">餐廳</Link>＞<Link className="rm-link-style" to="/restaurant/type">餐廳分類</Link></div>
                <div class="row">
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[1]}>
                                <img class="card-img-top"
                                    src="https://hotel.fhgh.com.tw/upload/news_dining_b/ALL_news_dining_21E21_aXVUglwioo.jpg"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台灣小吃</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[2]}>
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/64/8e/f6/caption.jpg?w=600&h=400&s=1"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>美式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-white text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[3]}>
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/81/74/ab/photo1jpg.jpg?w=600&h=400&s=1"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>日式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[4]}>
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6e/1e/e4/caption.jpg?w=600&h=-1&s=1"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>中式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-white text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[5]}>
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/dd/72/6b/1.jpg?w=600&h=-1&s=1"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>泰式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-white text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[6]}>
                                <img class="card-img-top"
                                    src="https://uploads-blog.icook.network/2016/07/Italy_food.jpeg"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>義式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-white text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[7]}>
                                <img class="card-img-top"
                                    src="https://www.gomaji.com/blog/wp-content/uploads/2020/03/C1.jpg"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>韓式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-white text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[8]}>
                                <img class="card-img-top"
                                    src="http://m.ccomick.com/uploads/allimg/180122/1-1P12209391N52.jpg"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>法式料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-white text-center">
                            <Link to="/restaurant/search" class="rm-link-style text-white" state={[9]}>
                                <img class="card-img-top"
                                    src="https://www.gomaji.com/blog/wp-content/uploads/2021/02/Taipei-Foreign-Food-Banner-e1612509356358.jpg"
                                    alt="Avatar" />
                                <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>異國料理</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}