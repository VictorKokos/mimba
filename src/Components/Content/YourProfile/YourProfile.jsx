import React from 'react';
import S from './YourProfile.module.css'
import iSavva from './../../../Source/Portraits/iSavva.jpg'
import Inf from './Inf/Inf'
const Profile = (props) => 
{
    return(
      <div className={S.profile}>
   <div className={S.photo}> 
     <img src={iSavva} /> 
     <input type="file"/>
     </div>
     <div className={S.aside} >

     </div>
    <Inf YourProfile = {props.YourProfile}/>
    </div>
    )
}

export default Profile;