import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import S from './Login.module.css'

const Button = (props) =>
{
    let letEnter=()=>
    {
      props.checkNameField()
      props.checkEmailField()
       props.changeName()
       props.letEnter()
       props.changeNameField("")
       props.changeEmailField("")
    }
    let notLetEnter = () =>
    {
    
      props.checkNameField()
    }
    return(
          (props.Login.areFilled.isNameFilled != "" && props.Login.areFilled.isEmailFilled)
        ?
        <NavLink to="/mimba/Swiper" >  <button onClick={letEnter}>Готово</button></NavLink>
        :<button onClick={notLetEnter}>Готово</button> 
    )
}


const Login = (props) =>
{

     
    
 let getName = (e) =>
 {
let text = e.target.value
props.changeNameField(text)
props.checkNameField()
props.checkEmailField()
props.changeNewName(text)

 }
 let getEmail = (e) =>
 {
let text = e.target.value
props.changeEmailField(text)
props.checkEmailField()
props.checkNameField()

 }

 return(
        
<div className={S.Login}>
    РЕГИСТРАЦИЯ
  <form> 
<div> <input onChange={getName} type= "text" /> Ваше имя
      <input onChange={getEmail}  type= "email" /> Ваш Email
</div> 
<Button checkEmailField = {props.checkEmailField}
 Login={props.Login} checkNameField={props.checkNameField}
 changeName={props.changeName} letEnter={props.letEnter}
  changeNameField= {props.changeNameField} changeEmailField={props.changeEmailField}/>
</form> 

</div>
    )
}
export default Login

