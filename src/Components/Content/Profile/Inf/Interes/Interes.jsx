import React from 'react';
import S from './Interes.module.css'
import { useState } from 'react';
const Interes = (props) => 
{

    return(
     
     <div className={S.Interes}>
            {props.interes}
     </div>
    )
}

export default Interes;