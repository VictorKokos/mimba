import React from 'react';


import './App.css';
import Header from './Components/Header/Header';
import Lenta from './Components/Lenta/Lenta'
import ContentContainer from './Components/Content/ContentContainer'
import Footer from './Components/Footer/Footer'

import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
  return (
    
    <div className="app-wrapper">
     
    <Header />
    <Lenta />
    <ContentContainer/>
   <Footer />

   
    </div>
  );
}

export default App;
