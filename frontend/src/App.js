import './css/navbar.css';
import './css/index.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container mt-3">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/album' element={<Album/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
