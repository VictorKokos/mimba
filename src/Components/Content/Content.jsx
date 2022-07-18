import React from 'react';
import Help from './Help/Help'
import Stats from './Stats/Stats'
import Swiper from './Swiper/Swiper'
import ProfilesContainer from './Profiles/ProfilesContainer'
import Messenger from './Messenger/Messenger'
import YourProfileContainer from './YourProfile/YourProfileContainer'
import Profile from './Profile/Profile'
import MessengerSupportContainer from './MessengerSupport/MessengerSupportContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import S from './Content.module.css'



const Content = (props) => 
{
  let profileRoutes = props.Profiles.PrInf.map((elem) => (<Route  exact path={"/Profile/" + elem.id} element={<Profile name={elem.name}
  interes={elem.interes} about={elem.about} meet={elem.meet} whoFind={elem.whoFind}
   photo={elem.photo} age = {elem.age} city={elem.city} country={elem.country} id={elem.id} key={elem.id}/>}/>))
   let messageRoutes = props.Profiles.PrInf.map((elem) => (<Route  exact path={"/Messenger/" + elem.id} element={<Messenger  name={elem.name}
   interes={elem.interes} about={elem.about} meet={elem.meet} whoFind={elem.whoFind}
    photo={elem.photo} age = {elem.age} city={elem.city} country={elem.country} id={elem.id} key={elem.id}/>}/>))
    return(
      <div className={S.content}>
     <Help />
    <Stats />
    
    <Routes>
    <Route exact path="/Swiper" element= {<Swiper/>}/>
    <Route exact path="/Profiles" element={<ProfilesContainer/>}/>
    <Route  exact path="/MessengerSupport" element= {<MessengerSupportContainer />}/>
    <Route  exact path="/Profile" element={<YourProfileContainer/>}/>
   {profileRoutes}
   {messageRoutes}
      
    
    </Routes>
   
    </div>
    
    )
}

export default Content;