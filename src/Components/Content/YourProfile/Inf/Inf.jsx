import React from 'react';
import S from './Inf.module.css'

const Inf = (props) => 
{
      const AreaForText = () =>
{
      if (props.YourProfile.isChangable)
      {
            return(
                  <textarea></textarea>
            )
      }
      else
      {
            return(
                  <div>

                  </div>
            )
      }
}
let onButtonClick = () =>
{
      props.letChanging()
}
    return(
     
     <div className={S.inf}>
      <div className={S.Polya}>
       <div className={S.name}>
      {props.YourProfile.name}  <AreaForText />
      </div>
<div className={S.GenderAge}>
      <h1>Пол, возраст:</h1>
     
      {props.YourProfile.gender}, {props.YourProfile.age} 
      </div>
      <div className={S.CountryCity}>
      <h1>Страна, город:</h1>
      {props.YourProfile.country}, {props.YourProfile.city}
      </div>
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
      <button onClick ={onButtonClick}>{props.YourProfile.changingText}</button>
     </div>
    )
}

export default Inf;