import "bootstrap-icons/font/bootstrap-icons.css";
import './css/navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';
import Attractions from './pages/Attractions';
import Forum from './pages/Forum';
import Restaurant_main from './pages/Restaurant_main';
import RestaurantArea from './pages/RestaurantArea';
import RestaurantType from './pages/RestaurantType';
import RestaurantSearch from './pages/RestaurantSearch';
import RestaurantInner from './pages/RestaurantInner';
import RestaurantComment from './pages/RestaurantComment';
import Journey from "./pages/Journey";
import NewJourney from "./pages/NewJourney"; 

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/album' element={<Album/>}></Route>
          <Route path='/attractions' element={<Attractions/>}></Route>
          <Route path='/forum' element={<Forum/>}></Route>
          <Route path='/restaurant' element={<Restaurant_main/>}></Route>
          <Route path='/restaurant/area' element={<RestaurantArea/>}></Route>
          <Route path='/restaurant/type' element={<RestaurantType/>}></Route>
          <Route path='/restaurant/search' element={<RestaurantSearch/>}></Route>
          <Route path='/restaurant/inner' element={<RestaurantInner/>}></Route>
          <Route path='/restaurant/comment' element={<RestaurantComment/>}></Route>
          <Route path="/journey" element={<Journey/>} ></Route>
          <Route path="/journey/newjourney" element={<NewJourney/>} ></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
