import React from 'react';
import onlineSupport from './../../../Source/OnlineSupport.svg';
import S from './Help.module.css';
const Help = () => 
{
    return(
      <div className={S.help}>
      <img src={onlineSupport} />
      <div className={S.supportText}>
     
      </div>
           </div>
    )
}

export default Help;