import React from 'react';
import { NavLink } from 'react-router-dom';
import S from './Talk.module.css'
const Talk = (props) => 
{
    return(
     
     <NavLink to={"/Messenger/" + props.id} className={S.talk}>
Напиши Мне
     </NavLink>
    )
}

export default Talk;