import React from 'react';

import i1 from './../../Source/Portraits/i (1).png'
import i2 from './../../Source/Portraits/i (2).png'
import i3 from './../../Source/Portraits/i (3).png'
import i4 from './../../Source/Portraits/i (4).png'
import i5 from './../../Source/Portraits/i (5).png'
import i6 from './../../Source/Portraits/i (6).png'
import i7 from './../../Source/Portraits/i (7).png'
import i8 from './../../Source/Portraits/i (8).png'
import i9 from './../../Source/Portraits/i (9).png'
import plus from './../../Source/Portraits/plus.png'

import S from './Lenta.module.css';
import LentaProfile from './LentaProfile/LentaProfile'
const Lenta = () => 
{
  
    return(
      <div className={S.lenta}>
     <LentaProfile photo={plus} />
     <LentaProfile photo={i1} />
     <LentaProfile photo={i2} />
     <LentaProfile photo={i3} />
     <LentaProfile photo={i4} />
      <LentaProfile photo={i5} />
     <LentaProfile photo={i6} />
     <LentaProfile photo={i7} />
     <LentaProfile photo={i8} />
     <LentaProfile photo={i9} />
      </div>
    )
}

export default Lenta;