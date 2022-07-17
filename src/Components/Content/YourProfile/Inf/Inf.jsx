import React from 'react';
import S from './Inf.module.css'
import Name from './Name/Name'
import Interes from './Interes/Interes'
import Meet from './Meet/Meet'
import About from './About/About'
import WhoFind from './WhoFind/WhoFind'

const Profile = () => 
{
    return(
     
     <div className={S.inf}>
      <Name />
      <div className={S.interes}>
<h1>Интересы</h1>
<Interes />
      </div>
      <div className={S.meet}>
<h1>Познакомлюсь</h1>
<Meet />
      </div>
      <div className={S.about}>
<h1>Расскажите о себе</h1>
<About />
      </div>
      <div className={S.whoFind}>
<h1>Кого ищу</h1>
<WhoFind />
      </div>
     </div>
    )
}

export default Profile;