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
function App() {
  return (
   <div>
     <HeaderComponent/>
     <NavComponent/>
     <div className="main wrapper">
     <Slide/>
      <Home/>
      {/* <About/> */}
      {/* <Album/> */}
     </div>
     <WidgetFooter/>
   <FooterComponent/>
   </div>
  );
}

export default App;
