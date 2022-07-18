import React from 'react';
import S from './Inf.module.css'

const Inf = (props) => 
{
    return(
     
     <div className={S.inf}>
      <div className={S.Polya}>
       <div className={S.name}>
      {props.YourProfile.name}
      </div>
      <h1>Пол, возраст:</h1>
      {props.YourProfile.gender}, {props.YourProfile.age}
      <h1>Страна, город:</h1>
      {props.YourProfile.country}, {props.YourProfile.city}
      <div className={S.interes}>
            
<h1>Интересы</h1>
{props.YourProfile.interes}
      </div>
      <div className={S.meet}>
<h1>Познакомлюсь</h1>
{props.YourProfile.meet}
      </div>
      <div className={S.about}>
<h1>Расскажите о себе</h1>
{props.YourProfile.about}
      </div>
      <div className={S.whoFind}>
<h1>Кого ищу</h1>
{props.YourProfile.whoFind}
      </div>
      
      </div>
     </div>
    )
}

export default Inf;