import React from 'react';
import S from './Profiles.module.css'
import Profile from './Profile/Profile'
const Profiles = (props) => 
{
 
    return(
      <div className={S.profiles}>
        {props.PrInf.map((mini) =>  (<div className={S.profile}>
    <Profile photo={mini.photo} name={mini.name} id={mini.id}/>
    </div>) )}
    </div>
    )
}

export default Profiles;