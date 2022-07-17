import React from 'react';
import S from './LentaProfile.module.css';
const LentaProfile = (props) => 
{
    return(
      <div className={S.lentaProfile}>
      <img src={props.photo} />
      </div>
    )
}

export default LentaProfile;