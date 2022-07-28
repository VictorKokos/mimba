import React from 'react';
import { NavLink } from 'react-router-dom';
const Login = (props) =>
{
    let changeIsAut = () =>
    {
        props.changeIsAuth()
    }
    return(
        
<div>LOGIN <NavLink to="/mimba/Swiper"> <button onClick={changeIsAut}>dcsc</button></NavLink></div>
    )
}
export default Login

