import React from 'react';
import Help from './Help/Help'
import Stats from './Stats/Stats'
import Swiper from './Swiper/Swiper'
import Profiles from './Profiles/Profiles'
import Messenger from './Messenger/Messenger'
import YourProfile from './YourProfile/YourProfile'
import Profile from './Profile/Profile'
import MessengerSupportContainer from './MessengerSupport/MessengerSupportContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import S from './Content.module.css'



const Content = (props) => 
{
  let profileRoutes = props.store.getState().Profiles.PrInf.map((elem) => (<Route  exact path={"/Profile/" + elem.id} element={<Profile name={elem.name}
  interes={elem.interes} about={elem.about} meet={elem.meet} whoFind={elem.whoFind}
   photo={elem.photo} id={elem.id}/>}/>))
   let messageRoutes = props.store.getState().Profiles.PrInf.map((elem) => (<Route  exact path={"/Messenger/" + elem.id} element={<Messenger  name={elem.name}
   interes={elem.interes} about={elem.about} meet={elem.meet} whoFind={elem.whoFind}
    photo={elem.photo}/>}/>))
    return(
      <div className={S.content}>
     <Help />
    <Stats />
    
    <Routes>
    <Route exact path="/Swiper" element= {<Swiper/>}/>
    <Route exact path="/Profiles" element={<Profiles PrInf ={props.store.getState().Profiles.PrInf}/>}/>
    <Route  exact path="/MessengerSupport" element= {<MessengerSupportContainer />}/>
    <Route  exact path="/Profile" element={<YourProfile/>}/>
   {profileRoutes}
   {messageRoutes}
      
    
    </Routes>
   
    </div>
    
    )
}

export default Content;