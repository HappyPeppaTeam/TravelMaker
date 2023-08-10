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
import Journey from "./pages/Journey";
import NewJourney from "./pages/NewJourney"; 
import NewJourneyTest from "./pages/NewJourneyTest";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/album' element={<Album/>}></Route>
          <Route path='/attractions' element={<Attractions/>}></Route>
          <Route path='/memberCenter' element={<MemberCenter/>}></Route>
          <Route path='/forum' element={<Forum/>}></Route>
          <Route path='/restaurant' element={<Restaurant_main/>}></Route>
          <Route path="/journey" element={<Journey/>} ></Route>
          <Route path="/journey/newjourney" element={<NewJourney/>} ></Route>
          <Route path="/journey/newjourneytest" element={<NewJourneyTest/>} ></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
