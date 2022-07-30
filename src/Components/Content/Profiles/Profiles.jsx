import React from 'react';
import S from './Profiles.module.css'
import Profile from './Profile/Profile'
import { useEffect } from 'react';



 


 
let Profiles = (props) =>
{
useEffect(
  () => {if(props.Profiles.PrInf.length==0)
    {
    props.setUsers()
    }},[]
) 

let onButtonClick = () =>
{
  props.setUsers()
}
    
return(
  <div className={S.profilesAndButton}>
  <div className={S.profiles}>
      
        
        {props.Profiles.PrInf.map((mini) =>  (<div className={S.profile}>
    <Profile country={mini.country} city={mini.city} age={mini.age} photo={mini.photo} name={mini.name} id={mini.id} key = {mini.id}/>
    </div>) )}
    

   </div>
   {props.Profiles.PrInf.length !=props.Profiles.maxLength? <button className={S.button} onClick={onButtonClick}>загрузить ещё</button>:<div></div>}
   </div>
    )
        
}

export default Profiles;