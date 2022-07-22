import React from 'react';
import S from './Profiles.module.css'
import Profile from './Profile/Profile'
import users from '../../../Source/Users';

let n=0

class Profiles extends React.Component
{

  constructor(props)
  {
    super(props)
    
  }
 
  give6 =(massiv) =>
  { 
  
    let massiv6 =[]
      
      massiv6.push(...massiv.slice(n, n+6))
      n = n+6;
  
    return massiv6;
  }

 

componentDidMount() 
{
  if(this.props.Profiles.PrInf.length==0)
  {
  this.props.setUsers(
    this.give6(users)
    )
  }
}

onButtonClick = () =>
{
  this.props.setUsers(
    this.give6(users)
    )
}
    render = () =>
    {
return(
  <div className={S.profilesAndButton}>
  <div className={S.profiles}>
      
        
        {this.props.Profiles.PrInf.map((mini) =>  (<div className={S.profile}>
    <Profile country={mini.country} city={mini.city} age={mini.age} photo={mini.photo} name={mini.name} id={mini.id} key = {mini.id}/>
    </div>) )}
    

   </div>
   {this.props.Profiles.PrInf.length !=this.props.Profiles.maxLength? <button className={S.button} onClick={this.onButtonClick}>загрузить ещё</button>:<div></div>}
   </div>
    )
        }
}

export default Profiles;