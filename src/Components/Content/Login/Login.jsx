import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import S from './Login.module.css'

const Button = (props) =>
{
    let sendName=()=>
    {
       props.changeName()
    }
    return(
          (props.Login.areFilled.isNameFilled != "" && props.Login.areFilled.isEmailFilled)
        ?
        <NavLink to="/mimba/Swiper">  <button onClick={sendName}>Готово</button></NavLink>
        :<button>Готово</button> 
    )
}


const Login = (props) =>
{

     
    
 let getName = (e) =>
 {
let text = e.target.value
props.checkIfNameFilled(text)
props.changeNewName(text)

 }
 let getEmail = (e) =>
 {
let text = e.target.value
props.checkIfEmailFilled(text)

 }

 return(
        
<div className={S.Login}>
    РЕГИСТРАЦИЯ
  <form> 
<div> <input onChange={getName} type= "text" /> Ваше имя
      <input onChange={getEmail}  type= "email" /> Ваш Email
</div> 
<Button Login={props.Login} changeName={props.changeName}/>
</form> 

</div>
    )
}
export default Login

