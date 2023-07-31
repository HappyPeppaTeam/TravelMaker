import "bootstrap-icons/font/bootstrap-icons.css";
import './css/navbar.css';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';
import Attractions from './pages/Attractions';
import Forum from './pages/Forum';
import Restaurant_main from './pages/Restaurant_main';
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/album' element={<Album/>}></Route>
          <Route path='/attractions' element={<Attractions/>}></Route>
          <Route path='/forum' element={<Forum/>}></Route>
          <Route path='/forum/article' element={<Article/>}></Route>
          <Route path='/restaurant' element={<Restaurant_main/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
