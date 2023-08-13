import { Link } from 'react-router-dom';
import '../css/index.css';
import React from 'react';
import Slider from '../components/Slick';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { useEffect } = React;

const article = await axios.get(`http://localhost/TravelMaker/Backend/public/api/getBoardText`);

const spot = await axios.get(`http://localhost/TravelMaker/Backend/public/api/attraction`);

const restaurant = [
  {
    type:'中式料理',
    url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6e/1e/e4/caption.jpg?w=600&h=-1&s=1',
    state: [4]
  },
  {
    type:'日式料理',
    url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/81/74/ab/photo1jpg.jpg?w=600&h=400&s=1',
    state: [3]
  }
];

const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
const renderContent = spot.data.map((item,index) => {
  if(index <= 7) {
    return (
      <a href="#" className="cardLink" key={index}>
              <div className="card m-2 shadow-sm cardScale spotCard">
                <img
                  src={item.PictureUrl1}
                  className="card-img-top spotImg"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold">{item.Name}</h4>
                  <p className="card-text description">
                    {item.Description}
                  </p>
                  <p className="d-flex align-items-center mb-0">
                    <span className="sortIcon me-2"></span
                    ><span className="d-block">景點</span>
                  </p>
                </div>
              </div>
      </a>
    )
  }
});

const TravelPlan = ({data}) => {
  return (
    <Link to={`/forum/discussion/article/${data.board_text_id}`} className="cardLink" state={data.board_text_id}>
      <div className="card cardShadow">
        <div className="row g-0">
          <div className="col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="img-fluid round h-100"
              alt="..."
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body p-0">
              <h4 className="card-title fw-bold mx-4 mb-4 mt-3">
                {data.text_title}
              </h4>
              <p className="card-text mx-4 mb-3 description">{data.text}</p>
              <p className="card-text mx-4 mb-3">
                <small className="text-muted">
                  <span className="travelSort">{data.type}</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const RestaurantCard = ({data}) => {
  return (
    <Link to='/restaurant/search' className="cardLink" state={data.state}>
      <div className="restaurantImg cardShadow">
        <img
          className="w-100"
          src={data.url}
          alt=""
        />
        <div className="mask w-100 h-100"></div>
        <h4 className="restaurantType">{data.type}</h4>
      </div>
    </Link>
  )
}

export default function Home() {

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    
    return (
        <div className="container mt-3">
          <div className="filter d-flex justify-content-evenly mt-4 mx-auto">
            <Link to="/restaurant" className='filterBtn mx-2'>餐廳</Link>
            <Link to="/attractions" className='filterBtn mx-2'>景點</Link>
            <Link to="/forum" className='filterBtn mx-2'>討論區</Link>
            <Link to="/journey" className='filterBtn mx-2'>自助旅遊排程</Link>
          </div>

          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide header mt-4 mb-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner h-100">
              <div className="carousel-item active h-100">
                <img
                  src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src="https://images.unsplash.com/photo-1682695795557-17447f921f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div className="travelGuide mb-5" data-aos="fade-up">
            <h2 className="fw-bold">精選旅遊攻略</h2>
            <p className="mb-0">沒有想法嗎? 快來看看旅遊達人們怎麼玩 !</p>
            <div className="row row-cols-2 g-3 mt-4">
              { article.data.map((item) => {
                return (
                  <div className="col" key={item.board_text_id}>
                    <TravelPlan data={item}></TravelPlan>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="popularRestaurant mb-5" data-aos="fade-up">
            <h2 className="fw-bold">熱門餐廳</h2>
            <p className="mb-0">沒有想法嗎? 快來看看旅遊達人們怎麼玩 !</p>
            <div className="row row-cols-2 mt-4">
              <div className="col">
                <RestaurantCard data={restaurant[0]}></RestaurantCard>
              </div>
              <div className="col">
                <RestaurantCard data={restaurant[1]}></RestaurantCard>
              </div>
            </div>
          </div>

          <div className="popularSpot" data-aos="fade-up">
            <h2 className="fw-bold">熱門景點</h2>
            <p className="mb-0">沒有想法嗎? 快來看看旅遊達人們怎麼玩 !</p>
            <Slider settings={settings} renderContent={renderContent}/>
          </div>
        </div>
    )
}