import '../css/restaurant.css';
import {Link} from 'react-router-dom';
export default function RestaurantArea() {
    return (
        <div className="rest-main">
            <div className="container">
            <div className="p-4"><Link className="rm-link-style" to="">餐廳</Link>＞<Link className="rm-link-style" to="/restaurant/area">地區分類</Link></div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[220,201,202,203,204,205,206]}>
                                <img src={require('../district/keelung.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>基隆市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[100,103,104,105,106,108,110,111,112,114,115,116]}>
                                <img src={require('../district/taipei.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台北市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[207,208,220,221,222,223,224,226,227,228,231,232,233,234,235,236,237,238,239,241,242,243,244,247,248,249,251,252,253]}>
                                <img src={require('../district/new_taipei.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>新北市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white"state={[320,324,325,326,327,328,330,33,334,35,336,337,338]}>
                                <img src={require('../district/taoyuan.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>桃園市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[302,303,304,305,306,307,308,310,311,312,313,314,315]}>
                                <img src={require('../district/hsinchu.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>新竹市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>新竹縣</h3>
                                </div>
                            </Link>
                        </div>
                    </div> */}
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[350,351,352,353,354,356,357,358,360,361,362,363,364,365,366,367,368,369]}>
                                <img src={require('../district/miaoli.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>苗栗縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[400,401,402,403,404,406,407,408,411,412,413,414,420,421,422,423,424,426,427,428,429,432,433,434,435,436,437,438,439]}>
                                <img src={require('../district/taichung.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台中市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[500,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,520,521,522,523,524,525,526,527,528,530]}>
                                <img src={require('../district/changhua.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>彰化縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[540,541,542,544,545,546,551,552,553,555,556,557,558]}>
                                <img src={require('../district/nantou.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>南投縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[630,631,632,633,634,635,636,637,638,640,643,646,647,648,649,651,652,653,654,655]}>
                                <img src={require('../district/yunlin.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>雲林縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[600,602,603,604,605,606,607,608,611,612,613,614,615,616,621,622,623,624,625]}>
                                <img src={require('../district/chiayi.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>嘉義市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white">
                                <img className="card-img-top" src="../images/street.jpg" alt="Avatar" />
                                <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>嘉義縣</h3>
                                </div>
                            </Link>
                        </div>
                    </div> */}
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[700,701,702,704,708,709,710,711,712,713,714,715,716,717,718,719,720,721,72,723,724,725,726,727,730,731,732,733,734,735,736,737,741,742,743,744,745]}>
                                <img src={require('../district/tainan.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台南市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[800,801,802,803,804,805,806,807,811,812,813,814,815,820,821,822,823,824,825,826,827,828,829,830,831,832,833,840,842,843,844,845,846,847,848,849,851,852]}>
                                <img src={require('../district/kaohsiung.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>高雄市</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[900,901,902,903,904,905,906,907,908,909,911,912,913,920,921,922,923,924,925,926,927,928,929,931,932,940,941,943,944,945,946,947]}>
                                <img src={require('../district/pingtung.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>屏東縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[950,951,952,953,954,955,956,957,958,959,961,962,963,964,965,966]}>
                                <img src={require('../district/taitong.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>台東縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[970,971,972,973,974,975,976,977,978,979,981,982,983]}>
                                <img src={require('../district/hualien.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>花蓮縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[260,261,262,263,264,265,266,267,268,269,270,272]}>
                                <img src={require('../district/yilan.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>宜蘭縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[880,881,882,883,884,885]}>
                                <img src={require('../district/penghu.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>澎湖縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[890,891,892,893,894,896]}>
                                <img src={require('../district/kinmen.jpg')} alt="Avatar" />
                                {/* <div className="card-img-overlay" style={{ 'padding': '50px' }}>
                                    <h3>金門縣</h3>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 p-3 p-3">
                        <div className="card text-white text-center">
                            <Link to="/restaurant/search" className="rm-link-style text-white" state={[209,210,211,212]}>
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