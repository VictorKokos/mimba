import React from 'react';
import logo from './../../Source/logo.png';
import S from './Footer.module.css'
const Footer = () => 
{
    return(
        <div className={S.footer}>
        <div className={S.logo}>
        <img src={logo} />
        </div>
        </div>
    )
}

export default Footer;