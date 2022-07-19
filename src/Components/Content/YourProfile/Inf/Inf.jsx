import React from 'react';
import S from './Inf.module.css'

const Inf = (props) => 
{
      const AreaForText = (props1) =>
{
      if (props.YourProfile.isChangable)
      {
            switch(props1.pole)
            {
                  case 1:
                        {
                              return (
                                  <div><input autoFocus={true} type="text" onChange={onInputChange} value={props.YourProfile.newData.newName}/> <button onClick={onNameButtonClick}></button></div>  
                              )
                        }
            }
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
let onInputChange = (e) =>
{
let text = e.target.value
props.changeNewName(text)
}
let onButtonClick = () =>
{
      props.letChanging()
}
let onNameButtonClick = ()=>
{
      props.changeName()
}

    return(
     
     <div className={S.inf}>
      <div className={S.Polya}>
       <div className={S.name}>
      {props.YourProfile.name}  <AreaForText pole={1} key='pole1'/>
      </div>
<div className={S.GenderAge}>
      <h1>Пол, возраст:</h1>
     
      {props.YourProfile.gender}, {props.YourProfile.age} <AreaForText />
      </div>
      <div className={S.CountryCity}>
      <h1>Страна, город:</h1>
      {props.YourProfile.country}, {props.YourProfile.city}<AreaForText />
      </div>
      <div className={S.interes}>
            
<h1>Интересы</h1>
{props.YourProfile.interes}<AreaForText />
      </div>
      <div className={S.meet}>
<h1>Познакомлюсь</h1>
{props.YourProfile.meet}<AreaForText />
      </div>
      <div className={S.about}>
<h1>Расскажите о себе</h1>
{props.YourProfile.about}<AreaForText />
      </div>
      <div className={S.whoFind}>
<h1>Кого ищу</h1>
{props.YourProfile.whoFind}<AreaForText />
      </div>
      
      </div>
      <button onClick ={onButtonClick}>{props.YourProfile.changingText}</button>
     </div>
    )
}

export default Inf;