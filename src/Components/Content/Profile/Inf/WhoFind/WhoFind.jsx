import React from 'react';
import S from './WhoFind.module.css'
const WhoFind = (props) => 
{
    return(
     
        <div className={S.WhoFind}>
        {props.whoFind}
               </div>
    )
}

export default WhoFind;