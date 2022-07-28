import React from 'react';
import { NavLink } from 'react-router-dom';
import S from './Talk.module.css'
const Talk = (props) => 
{
    return(
     
     <NavLink to={"/mimba/MessengerSupport/"} className={S.talk}>
Напиши Мне
     </NavLink>
    )
}

export default Talk;