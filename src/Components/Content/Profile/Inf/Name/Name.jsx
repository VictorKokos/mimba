import React from 'react';
import S from './Name.module.css'
const Name = (props) => 
{
    return(
     
        <div className={S.name}>
       { props.name}, {props.age}
               </div>
    )
}

export default Name;