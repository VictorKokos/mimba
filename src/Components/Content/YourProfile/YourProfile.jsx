import React from 'react';
import S from './YourProfile.module.css'
import iSavva from './../../../Source/Portraits/iSavva.jpg'
import InfContainer from './Inf/InfContainer'
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
    <InfContainer YourProfile = {props.YourProfile}/>
    </div>
    )
}

export default Profile;