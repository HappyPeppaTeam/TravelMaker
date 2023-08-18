import '../css/Forumstyles.css';
import ForumCards from '../components/ForumCard';
import DiscussionBoard from '../components/DiscussionBoardList';
import ForumArticleList from '../components/ForumArticleList';
import { Link } from 'react-router-dom';


export default function Forum() {

  return (
    <div className="main">
      {/* <!-- 導覽列 --> */}
      <DiscussionBoard></DiscussionBoard>
      <div className="forum-Addarticle">
        <button className="btn btn-primary">
          <Link to="/forum/discussion/addarticle">發文</Link>
        </button>
      </div>
      <div className="container">
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
        <div>
          <h1>精選文章</h1>
          <p>想看看網友是怎麼規劃的嗎</p>
          <ForumCards></ForumCards>
        </div>
        {/* <!-- 最新討論串 --> */}
        <div className="row">
          <h1>最新討埨串</h1>
          <ForumArticleList></ForumArticleList>
        </div>
      </div>
    </div>
  )
}