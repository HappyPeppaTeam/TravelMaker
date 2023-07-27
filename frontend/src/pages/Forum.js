import '../css/Forumstyles.css';

export default function Forum() {
  return (
    <div className="main container">
      {/* <!-- 導覽列 --> */}
      <div className="discussion-board bg-blue-3 mx-0 row gy-2">
        <div className="sub-discussion-board col-6 col-md">
          <button className="btn btn-secondary" type="button" id="defaultDropdown">
            <a href="">首頁</a>
          </button>
        </div>
        <div className="sub-discussion-board col-6 col-md">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown"
            data-bs-auto-close="true" aria-expanded="false">
            北部討論版
          </button>
          <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
            <li><a className="dropdown-item" href="#">北部綜合討論版</a></li>
            <li><a className="dropdown-item" href="#">臺北市</a></li>
            <li><a className="dropdown-item" href="#">新北市</a></li>
            <li><a className="dropdown-item" href="#">宜蘭縣</a></li>
            <li><a className="dropdown-item" href="#">基隆市</a></li>
            <li><a className="dropdown-item" href="#">桃園市</a></li>
            <li><a className="dropdown-item" href="#">新竹市</a></li>
            <li><a className="dropdown-item" href="#">新竹縣</a></li>
          </ul>
        </div>
        <div className="sub-discussion-board col-6 col-md">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown"
            data-bs-auto-close="true" aria-expanded="false">
            中部討論版
          </button>
          <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
            <li><a className="dropdown-item" href="#">中部綜合討論版</a></li>
            <li><a className="dropdown-item" href="#">臺中市</a></li>
            <li><a className="dropdown-item" href="#">苗栗縣</a></li>
            <li><a className="dropdown-item" href="#">彰化縣</a></li>
            <li><a className="dropdown-item" href="#">南投縣</a></li>
            <li><a className="dropdown-item" href="#">雲林縣</a></li>
          </ul>
        </div>
        <div className="sub-discussion-board col-6 col-md">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown"
            data-bs-auto-close="true" aria-expanded="false">
            南部討論版
          </button>
          <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
            <li><a className="dropdown-item" href="#">南部綜合討論版</a></li>
            <li><a className="dropdown-item" href="#">嘉義市</a></li>
            <li><a className="dropdown-item" href="#">嘉義縣</a></li>
            <li><a className="dropdown-item" href="#">臺南市</a></li>
            <li><a className="dropdown-item" href="#">高雄市</a></li>
            <li><a className="dropdown-item" href="#">屏東縣</a></li>
          </ul>
        </div>
        <div className="sub-discussion-board col-6 col-md">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown"
            data-bs-auto-close="true" aria-expanded="false">
            花東離島討論版
          </button>
          <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
            <li><a className="dropdown-item" href="#">花東離島綜合討論版</a></li>
            <li><a className="dropdown-item" href="#">花蓮縣</a></li>
            <li><a className="dropdown-item" href="#">臺東縣</a></li>
            <li><a className="dropdown-item" href="#">澎湖縣</a></li>
            <li><a className="dropdown-item" href="#">金門縣</a></li>
            <li><a className="dropdown-item" href="#">連江縣</a></li>
          </ul>
        </div>
      </div>

      {/* <!-- 輪播圖 --> */}
      <div className="forum-carousel">
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item imageSize active">
              <img src={require('../images/taipei101.jpg')} className="d-block w-100" style={{ height: '400px' }} alt="..." />
              <a href="https://www.google.com/"></a>
            </div>
            <div className="carousel-item imageSize">
              <img src={require('../images/taipei-free.jpg')} className="d-block w-100" style={{ height: '400px' }} alt="..." />
              <a href="https://www.google.com/"></a>
            </div>
            <div className="carousel-item imageSize">
              <img src={require('../images/taipei.jpg')} className="d-block w-100" style={{ height: '400px' }} alt="..." />
              <a href="https://www.google.com/"></a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- 精選文章 --> */}
      <div className="row">
        <h1>精選文章</h1>
        <p>想看看網友是怎麼規劃的嗎</p>
        <div className="col-md-6 mb-1">
          <div className="card article">
            <img src={require('../images/card-1.jpg')} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">精選文章1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-1">
          <div className="card article">
            <img src={require('../images/card-2.jpg')} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">精選文章2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 最新討論串 --> */}
      <div className="row">
        <h1>最新討埨串</h1>

        <table className="table table-striped table-bordered">
          <tr>
            <th>標題</th>
            <th>回覆</th>
            <th>點閱率</th>
            <th>發表日期</th>
          </tr>
          <tr>
            <td><a href="">第一篇文章</a></td>
            <td>user</td>
            <td>點閱率</td>
            <td>2023.7.20</td>
          </tr>
          <tr>
            <td><a href="">第二篇文章</a></td>
            <td>user</td>
            <td>點閱率</td>
            <td>2023.7.20</td>
          </tr>
          <tr>
            <td><a href="">第三篇文章</a></td>
            <td>user</td>
            <td>點閱率</td>
            <td>2023.7.20</td>
          </tr>
          <tr>
            <td><a href="">第四篇文章</a></td>
            <td>user</td>
            <td>點閱率</td>
            <td>2023.7.20</td>
          </tr>
          <tr>
            <td><a href="">第五篇文章</a></td>
            <td>user</td>
            <td>點閱率</td>
            <td>2023.7.20</td>
          </tr>
          <tr>
            <td><a href="">第六篇文章</a></td>
            <td>user</td>
            <td>點閱率</td>
            <td>2023.7.20</td>
          </tr>
        </table>

      </div>

    </div>
  )
}