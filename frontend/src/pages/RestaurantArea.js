import '../css/restaurant.css';
import {Link} from 'react-router-dom';
export default function RestaurantArea() {
    return (
        <div className="main">
            <div className="container">
                <h4 className="p-4">依地區分類</h4>
                <div className="row">
                    {/* <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>基隆市</h3>
                                </div>
                            </Link>
                        </div>
                    </div> */}
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/keelung.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>基隆市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/taipei.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台北市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[208, 228, 252]}>
                                <img src={require('../district/new_taipei.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>新北市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/taoyuan.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>桃園市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/hsinchu.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>新竹市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>新竹縣</h3>
                                </div>
                            </Link>
                        </div>
                    </div> */}
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/miaoli.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>苗栗縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/taichung.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台中市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/changhua.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>彰化縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/nantou.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>南投縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/yunlin.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>雲林縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/chiayi.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>嘉義市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>嘉義縣</h3>
                                </div>
                            </Link>
                        </div>
                    </div> */}
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/tainan.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台南市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/kaohsiung.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>高雄市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/pingtung.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>屏東縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/taitong.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台東縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/hualien.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>花蓮縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/yilan.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>宜蘭縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/penghu.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>澎湖縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/kinmen.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>金門縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="" className="rm-link-style text-white">
                                <img src={require('../district/matsu.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>連江縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}