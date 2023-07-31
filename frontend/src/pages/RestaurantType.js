import '../css/restaurant.css';
export default function RestaurantArea() {
    return (
        <div class="main">
            <div class="container">
                <h4 class="p-4">依餐廳分類</h4>
                <div class="row">
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-center">
                            <a href="" class="rm-link-style text-white">
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/64/8e/f6/caption.jpg?w=600&h=400&s=1"
                                    alt="Avatar"/>
                                    <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                        <h3>美式料理</h3>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-center">
                            <a href="" class="rm-link-style text-white">
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6e/1e/e4/caption.jpg?w=600&h=-1&s=1"
                                    alt="Avatar"/>
                                    <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                        <h3>中式料理</h3>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-white text-center">
                            <a href="" class="rm-link-style text-white">
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/81/74/ab/photo1jpg.jpg?w=600&h=400&s=1"
                                    alt="Avatar"/>
                                    <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                        <h3>日式料理</h3>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 p-3 p-3">
                        <div class="card text-white text-center">
                            <a href="" class="rm-link-style text-white">
                                <img class="card-img-top"
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/dd/72/6b/1.jpg?w=600&h=-1&s=1"
                                    alt="Avatar"/>
                                    <div class="card-img-overlay" style={{ 'padding': '50px' }}>
                                        <h3>泰式料理</h3>
                                    </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}