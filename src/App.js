import React from 'react';


import './App.css';
import Lenta from './Components/Lenta/Lenta'
import ContentContainer from './Components/Content/ContentContainer'
import Footer from './Components/Footer/Footer'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderContainer from './Components/Header/HeaderContainer';

const App = (props) => {
  return (
    
    <div className="app-wrapper">
     
    <HeaderContainer />
    <Lenta />
    <ContentContainer/>
   <Footer />

   
    </div>
  );
}

export default App;
