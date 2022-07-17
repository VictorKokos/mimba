import React from 'react';
import logo from './../../Source/logo.png';
import favorite from './../../Source/Favorite.svg';
import search from './../../Source/Search.svg';
import speech from './../../Source/Speech.svg';
import user from './../../Source/User.svg';
import S from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = () => 
{
    return(
        <header className={S.header}>
        <div className={S.logo}>
        <img src={logo} />
        </div>
       <NavLink className={S.znakomstva} to="/Swiper">
         <img src={favorite}/>Знакомства
         </NavLink>
         <NavLink className={S.search} to="/Profiles">
         <img src={search}/>Поиск
         </NavLink>
         <NavLink className={S.messages}  to="/MessengerSupport">
         <img src={speech}/>Сообщения
         </NavLink>
         <NavLink className={S.profile}  to="/Profile">
         <img src={user}/>Профиль
         </NavLink>
      </header>
    )
}

export default Header;