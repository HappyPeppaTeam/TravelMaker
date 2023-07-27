import "bootstrap-icons/font/bootstrap-icons.css";
import './css/navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Sidebar from "./components/Sidebar";

import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/album' element={<Album/>}></Route>
        </Routes>
      <Footer/>
      <Routes>
        <Route path='/journey' Component={Sidebar}></Route>
      </Routes>
    </div>
  );
}

export default App;
