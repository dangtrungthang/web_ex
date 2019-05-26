import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from './components/NavComponent';
import HeaderComponent from './components/HeaderComponent';
import Slide from './components/Slide';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
   <div>
     <HeaderComponent/>
     <NavComponent/>
     <div className="main wrapper">
     <Slide/>


     </div>
    <FooterComponent/>
   </div>
  );
}

export default App;
