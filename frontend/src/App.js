import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import './css/navbar.css';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateAlbum from './pages/CreateAlbum';
import Album from "./pages/Album";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/album' element={<Album/>}></Route>
          <Route path='/album/create' element={<CreateAlbum/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
