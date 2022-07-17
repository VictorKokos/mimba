import React from 'react';
import S from './YourProfile.module.css'
import iSavva from './../../../Source/Portraits/iSavva.jpg'
import Inf from './Inf/Inf'
const Profile = () => 
{
    return(
      <div className={S.profile}>
   <div className={S.photo}> 
     <img src={iSavva} /> 
     <input type="file"/>
     </div>
     <div className={S.aside} >

     </div>
    <Inf />
    </div>
    )
}

export default Profile;