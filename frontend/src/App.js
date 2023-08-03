import "bootstrap-icons/font/bootstrap-icons.css";
import './css/navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';
import Attractions from './pages/Attractions';
import MemberCenter from './pages/MemberCenter';
import Forum from './pages/Forum';
import Restaurant_main from './pages/Restaurant_main';
import Attractionattraction from "./pages/Attractionattraction";
import Attractioncountry from "./pages/Attractioncountry";
import Attractionmore from "./pages/Attractionmore";
import Attraction_innerpage from "./pages/Attraction_innerpage";
import Attraction_forun from "./pages/Attraction_forun";
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
          <Route path='/attractions/Attractioncountry' element={<Attractioncountry/>}></Route>
          <Route path='/attractions/Attractionattraction' element={<Attractionattraction/>}></Route>
          <Route path='/attractions/Attractionmore' element={<Attractionmore/>}></Route>
          <Route path='/Attractionmore/Attraction_innerpage' element={<Attraction_innerpage/>}></Route>
          <Route path='/Attraction_innerpage/Attraction_forun' element={<Attraction_forun/>}></Route>
          <Route path='/memberCenter' element={<MemberCenter/>}></Route>
          <Route path='/forum' element={<Forum/>}></Route>
          <Route path='/restaurant' element={<Restaurant_main/>}></Route>
          <Route path="/journey" element={<Journey/>} ></Route>
          <Route path="/journey/newjourney" element={<NewJourney/>} ></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
