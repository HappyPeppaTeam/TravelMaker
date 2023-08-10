import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import './css/navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';
import CreateAlbum from './pages/CreateAlbum';
import EditAlbum from "./pages/EditAlbum";
import Attractions from './pages/Attractions';
import MemberCenter from './pages/MemberCenter';
import Forum from './pages/Forum';
import Restaurant_main from './pages/Restaurant_main';
import Article from "./pages/Article";
import Discussion from "./pages/Discussion";
import Journey from "./pages/Journey";
import NewJourney from "./pages/NewJourney"; 
import AddArticle from "./pages/AddArticle";


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
          <Route path='/memberCenter' element={<MemberCenter/>}></Route>
          <Route path='/forum' element={<Forum/>}></Route>
          <Route path='/forum/discussion/:id' element={<Discussion/>}></Route>
          <Route path='/forum/discussion/addarticle' element={<AddArticle/>}></Route>
          <Route path='/forum/discussion/article/:id' element={<Article/>}></Route>
          <Route path='/restaurant' element={<Restaurant_main/>}></Route>
          <Route path="/journey" element={<Journey/>} ></Route>
          <Route path="/journey/newjourney" element={<NewJourney/>} ></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
