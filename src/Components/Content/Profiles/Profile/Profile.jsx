import React from 'react';
import { NavLink } from 'react-router-dom';
import S from './Profile.module.css'
const Profile = (props) => 
{

    return(
      <NavLink to={'/Profile/' + props.id} className={S.profile}>
      <img src={props.photo}></img>
      <div className={S.description}>{props.name}, {props.age}</div>
      <div className={S.description}>{props.country}, {props.city}</div>
    </NavLink>
    )
}

export default Profile;