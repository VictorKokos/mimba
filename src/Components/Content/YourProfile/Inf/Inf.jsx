import React from 'react';
import S from './Inf.module.css'
import AreaForTextContainer from './AreaForText/AreaForTextContainer';
const Inf = (props) => 
{
      
let onNameInputChange = (e) =>
{
let text = e.target.value
props.changeNewName(text)
}
let onNameButtonClick = ()=>
{
      props.letChangingName()
      props.changeName()
}


let onAgeInputChange = (e) =>
{
let text = e.target.value
props.changeNewAge(text)
}
let onAgeButtonClick = ()=>
{
      props.letChangingAge()
      props.changeAge()
}


let onCityInputChange = (e) =>
{
let text = e.target.value
props.changeNewCity(text)
}
let onCityButtonClick = ()=>
{
      props.letChangingCity()
      props.changeCity()
}


let onInteresInputChange = (e) =>
{
let text = e.target.value
props.changeNewInteres(text)
}
let onInteresButtonClick = ()=>
{
      props.letChangingInteres()
      props.changeInteres()
}


let onMeetInputChange = (e) =>
{
let text = e.target.value
props.changeNewMeet(text)
}
let onMeetButtonClick = ()=>
{
      props.letChangingMeet()
      props.changeMeet()
}


let onAboutInputChange = (e) =>
{
let text = e.target.value
props.changeNewAbout(text)
}
let onAboutButtonClick = ()=>
{
      props.letChangingAbout()
      props.changeAbout()
}


let onWhoFindInputChange = (e) =>
{
let text = e.target.value
props.changeNewWhoFind(text)
}
let onWhoFindButtonClick = ()=>
{
      props.letChangingWhoFind()
      props.changeWhoFind()
}


    return(
     
     <div className={S.inf}>
      <div className={S.Polya}>
       <div className={S.name}>
      {props.YourProfile.name}  <AreaForTextContainer pole ={1} key='pole1' onNameInputChange={onNameInputChange} /> <button onClick={onNameButtonClick}></button>
      </div>
<div className={S.GenderAge}>
      <h1>Пол, возраст:</h1>
     
       {props.YourProfile.age} <AreaForTextContainer pole ={2} key='pole2' onAgeInputChange={onAgeInputChange} /><button onClick={onAgeButtonClick}></button>
      </div>
      <div className={S.CountryCity}>
      <h1>Страна, город:</h1>
      {props.YourProfile.city}<AreaForTextContainer pole={3} key='pole3' onCityInputChange={onCityInputChange}/><button onClick={onCityButtonClick}></button>
      </div>
      <div className={S.interes}>
            
<h1>Интересы</h1>
{props.YourProfile.interes}<AreaForTextContainer pole={4} key='pole4' onInteresInputChange={onInteresInputChange}/><button onClick={onInteresButtonClick}></button>
      </div>
      <div className={S.meet}>
<h1>Познакомлюсь</h1>
{props.YourProfile.meet}<AreaForTextContainer pole={5} key='pole5' onMeetInputChange={onMeetInputChange}/><button onClick={onMeetButtonClick}></button>
      </div>
      <div className={S.about}>
<h1>Расскажите о себе</h1>
{props.YourProfile.about}<AreaForTextContainer pole={6} key='pole6' onAboutInputChange={onAboutInputChange}/><button onClick={onAboutButtonClick}></button>
      </div>
      <div className={S.whoFind}>
<h1>Кого ищу</h1>
{props.YourProfile.whoFind}<AreaForTextContainer pole={7} key='pole7' onWhoFindInputChange={onWhoFindInputChange}/><button onClick={onWhoFindButtonClick}></button>
      </div>
      
      </div>
      
     </div>
    )
}

export default Inf;