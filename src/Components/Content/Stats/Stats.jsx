import React from 'react';
import { useState } from 'react';

import S from './Stats.module.css';
const Stats = () => 
{
    return(
      <div className={S.stats}>
          <div className={S.oneStat}>
      <div>
  Сообщения
      </div>
      <div>
          0
      </div>
      </div>
      <div className={S.oneStat}>
      <div>
  Просмотры
      </div>
      <div>
          0
      </div>
      </div>
      <div className={S.oneStat}>
      <div>
  Вы нравитесь
      </div>
      <div>
          0
      </div>
      </div>
      <div className={S.oneStat}>
      <div>
  Вам нравятся
      </div>
      <div>
          0
      </div>
      </div>
      <div className={S.oneStat}>
     
      <div>
         
      </div>
      </div>
      <div className={S.oneStat}>
      <div>
  Взаимные симпатии
      </div>
      <div>
          0
      </div>
      </div>
      </div>
    )
}

export default Stats;