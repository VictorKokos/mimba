import React from 'react';
import logo from './../../Source/logo.png';
import favorite from './../../Source/Favorite.svg';
import search from './../../Source/Search.svg';
import speech from './../../Source/Speech.svg';
import user from './../../Source/User.svg';
import S from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Choice = (props) =>
{
  
let returnToLogin =() =>
{
  props.returnToLogin()
}
  return (
    <div className={S.Choice}>
        <NavLink className={S.oneChoice} to="/mimba/YourProfile">
         <input type="button" value={"Ваш профиль"}/>
         </NavLink>
    <NavLink className={S.oneChoice}  to="/">
         <input type="button" value={"Выход"} onClick={returnToLogin}/>
         </NavLink> 
    </div>
  )
}
const Header = (props) => 
{
  let [isClicked, setClick ] = useState(false);
    return(
        <header className={S.header}>
        <div className={S.logo}>
        <img src={logo} />
        </div>
       <NavLink className={S.znakomstva} to="/mimba/Swiper">
         <img src={favorite}/>Знакомства
         </NavLink>
         <NavLink className={S.search} to="/mimba/Profiles">
         <img src={search}/>Поиск
         </NavLink>
         <NavLink className={S.messages}  to="/mimba/MessengerSupport">
         <img src={speech}/>Сообщения
         </NavLink>
         <div onClick={() => setClick(!isClicked)} onMouseLeave={()=> setClick(false)} className={S.profile}>
         <img src={user}/>Профиль {isClicked? <Choice returnToLogin={props.returnToLogin}/>:null}
         </div>
         
      </header>
    )
}

export default Header;