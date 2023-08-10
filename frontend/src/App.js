import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import './css/navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';
import CreateAlbum from './pages/CreateAlbum';
import EditAlbum from "./pages/EditAlbum";
import Attractions from './pages/Attractions';
import MemberCenter from './pages/MemberCenter';
import Forum from './pages/Forum';
import Restaurant_main from './pages/Restaurant_main';
import Attractionattraction from "./pages/Attractionattraction";
import Attractioncountry from "./pages/Attractioncountry";
import Attractionmore from "./pages/Attractionmore";
import Attraction_innerpage from "./pages/Attraction_innerpage";
import Attraction_forun from "./pages/Attraction_forun";
import RestaurantArea from './pages/RestaurantArea';
import RestaurantType from './pages/RestaurantType';
import RestaurantSearch from './pages/RestaurantSearch';
import RestaurantInner from './pages/RestaurantInner';
import RestaurantComment from './pages/RestaurantComment';
import Journey from "./pages/Journey";
import NewJourney from "./pages/NewJourney";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/ErrorPage";



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/album' element={<Album/>}></Route>
          <Route path='/album/create' element={<CreateAlbum/>}></Route>
          <Route path='/album/edit' element={<EditAlbum/>}></Route>
          <Route path='/attractions' element={<Attractions/>}></Route>
          <Route path='/attractions/Attractioncountry' element={<Attractioncountry/>}></Route>
          <Route path='/attractions/Attractionattraction' element={<Attractionattraction/>}></Route>
          <Route path='/attractions/Attractionmore' element={<Attractionmore/>}></Route>
          <Route path='/Attractionmore/Attraction_innerpage' element={<Attraction_innerpage/>}></Route>
          <Route path='/Attraction_innerpage/Attraction_forun' element={<Attraction_forun/>}></Route>
          <Route path='/memberCenter' element={<MemberCenter/>}></Route>
          <Route path='/forum' element={<Forum/>}></Route>
          <Route path='/restaurant' element={<Restaurant_main/>}></Route>
          <Route path='/restaurant/area' element={<RestaurantArea/>}></Route>
          <Route path='/restaurant/type' element={<RestaurantType/>}></Route>
          <Route path='/restaurant/search' element={<RestaurantSearch/>}></Route>
          <Route path='/restaurant/inner' element={<RestaurantInner/>}></Route>
          <Route path='/restaurant/comment' element={<RestaurantComment/>}></Route>
          <Route path="/journey" element={<Journey/>} ></Route>
          <Route path="/journey/newjourney" element={<NewJourney/>} ></Route>
          <Route path='/Admin' element={<Admin />}></Route>
          <Route path='/ErrorPage/:errorCode' element={<ErrorPage />}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
