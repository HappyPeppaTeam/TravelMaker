import { Link } from 'react-router-dom';
import '../css/index.css';
import React from 'react';
import Slider from '../components/Slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { useEffect } = React;
const data = [
    {
      url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1689644917165-77ac0b422fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1689350098247-5e02f4106cad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    
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
const renderContent = data.map((item,index) => (
  <a href="#" className="cardLink" key={index}>
          <div className="card m-2 shadow-sm cardScale">
            <img
              src={item.url}
              className="card-img-top spotImg"
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title fw-bold">野柳地質公園</h4>
              <p className="card-text">
                擁有奇岩美石的野柳地質公園,是揚名國際的天然風景名勝地。
              </p>
              <p className="d-flex align-items-center mb-0">
                <span className="sortIcon me-2"></span
                ><span className="d-block">景點</span>
              </p>
            </div>
          </div>
  </a>
));

const TravelPlan = () => {
  return (
    <a href="#" className="cardLink">
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
                好吃好喝又好玩!南投星空露營場
              </h4>
              <p className="card-text mx-4 mb-3">
                <small className="text-muted">
                  <span className="travelSort me-2">野餐</span>
                  <span className="travelSort">親子同樂</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

const RestaurantCard = () => {
  return (
    <a href="#" className="cardLink">
      <div className="restaurantImg cardShadow">
        <img
          className="w-100"
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
        <div className="mask w-100 h-100"></div>
        <h4 className="restaurantType">平價小吃</h4>
      </div>
    </a>
  )
}

export default function Home() {

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    
    return (
        <div className="container mt-3">
          <div className="filter d-flex justify-content-evenly mt-4 mx-auto">
            <Link to="/restaurant">餐廳</Link>
            <Link to="/attractions">景點</Link>
            <Link to="/forum">討論區</Link>
            <a href="#">自助旅遊排程</a>
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
              <div className="col">
                <TravelPlan></TravelPlan>
              </div>
              <div className="col">
                <TravelPlan></TravelPlan>
              </div>
              <div className="col">
                <TravelPlan></TravelPlan>
              </div>
              <div className="col">
                <TravelPlan></TravelPlan>
              </div>
            </div>
          </div>

          <div className="popularRestaurant mb-5" data-aos="fade-up">
            <h2 className="fw-bold">熱門餐廳</h2>
            <p className="mb-0">沒有想法嗎? 快來看看旅遊達人們怎麼玩 !</p>
            <div className="row row-cols-2 mt-4">
              <div className="col">
                <RestaurantCard></RestaurantCard>
              </div>
              <div className="col">
                <RestaurantCard></RestaurantCard>
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