import React from 'react';
import S from './Meet.module.css'
const Meet = (props) => 
{
    return(
     
        <div className={S.meet}>
        {props.meet}
               </div>
    )
}

export default Meet;