import React from 'react';
import S from './YourProfile.module.css'
import InfContainer from './Inf/InfContainer'
const Profile = (props) => 
{

  let onPhotoSelected = (e) =>
  {
    if(e.target.files.length)
    {
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => { props.saveNewPhoto(reader.result)}
  
    }
  }
 
    return(
      <div className={S.profile}>
   <div className={S.photo}> 
     <img src={props.YourProfile.photo} /> 
     <input type="file" onChange={onPhotoSelected}/>
     </div>
     <div className={S.aside} >

     </div>
    <InfContainer YourProfile = {props.YourProfile}/>
    </div>
    )
}

export default Profile;