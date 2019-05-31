import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from './components/NavComponent';
import HeaderComponent from './components/HeaderComponent';
import Slide from './components/Slide';
import FooterComponent from './components/FooterComponent';
import Home from './client/pages/Home';
import Album from './components/Album';
import WidgetFooter from './components/WidgetFooter';
import About from './client/pages/About';
import { Main } from './routers/clientRouters';
import { BrowserRouter } from 'react-router-dom'
import NuocNgoai from './client/pages/NuocNgoai';
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <NavComponent />
      <Main />
      <WidgetFooter />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
