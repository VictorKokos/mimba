import React from 'react';
import S from './About.module.css'
const About = (props) => 
{
    return(
     
     <div className={S.About}>
{props.about}
     </div>
    )
}

export default About;