import React from 'react';
import S from './Inf.module.css'
import Name from './Name/Name'
import Interes from './Interes/Interes'
import Meet from './Meet/Meet'
import About from './About/About'
import WhoFind from './WhoFind/WhoFind'
import Talk from './Talk/Talk'
const Profile = (props) => 
{
    return(
     
     <div className={S.inf}>
      <Name name={props.name} age={props.age} />
      <div> {props.city}, {props.country}</div>
      <div className={S.interes}>
<h1>Интересы</h1>
<Interes interes={props.interes}/>
      </div>
      <div className={S.meet}>
<h1>Познакомлюсь</h1>
<Meet meet={props.meet} />
      </div>
      <div className={S.about}>
<h1>Расскажите о себе</h1>
<About about={props.about}/>
      </div>
      <div className={S.whoFind}>
<h1>Кого ищу</h1>
<WhoFind whoFind={props.whoFind}/>
      </div>
     <Talk id={props.id}/>
     </div>
    )
}

export default Profile;