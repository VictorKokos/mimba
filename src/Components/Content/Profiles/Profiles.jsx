import React from 'react';
import S from './Profiles.module.css'
import Profile from './Profile/Profile'


class Profiles extends React.Component
{

  constructor(props)
  {
    super(props)
    
  }
 


 

componentDidMount() 
{
  if(this.props.Profiles.PrInf.length==0)
  {
  this.props.setUsers()
  }
}

onButtonClick = () =>
{
  this.props.setUsers()
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