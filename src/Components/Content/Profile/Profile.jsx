import React from 'react';
import S from './Profile.module.css'
import iSavva from './../../../Source/Portraits/iSavva.jpg'
import Inf from './Inf/Inf'
const Profile = (props) => 
{
    return(
      <div className={S.profile}>
   <div className={S.photo}> 
     <img src={props.photo} /> 
     </div>
     <div className={S.aside}>

     </div>
    <Inf name={props.name} meet={props.meet}
     interes={props.interes} about={props.about} whoFind={props.whoFind} id={props.id}
     age = {props.age} city={props.city} country={props.country}/>
    </div>
    )
}

export default Profile;