 import React from "react"
 
 const AreaForText = (props) =>
{

      if (props.YourProfile.isChangableName && props.pole==1)
      {
            
                              return (
                                  <input  type="text" onChange={props.onNameInputChange} value={props.YourProfile.newData.newName}/>  
                              )
      }
      else if (props.YourProfile.isChangableAge && props.pole==2)
      {
            return (
                  <input type="text" onChange={props.onAgeInputChange} value={props.YourProfile.newData.newAge}/> 
              )
      }
      else if (props.YourProfile.isChangableCity && props.pole==3)
      {
            return (
                  <input type="text" onChange={props.onCityInputChange} value={props.YourProfile.newData.newCity}/> 
              )
      }
      else if (props.YourProfile.isChangableInteres && props.pole==4)
      {
            return (
                  <input type="text" onChange={props.onInteresInputChange} value={props.YourProfile.newData.newInteres}/> 
              )
      }
      else if (props.YourProfile.isChangableMeet && props.pole==5)
      {
            return (
                  <input type="text" onChange={props.onMeetInputChange} value={props.YourProfile.newData.newMeet}/> 
              )
      }
      else if (props.YourProfile.isChangableAbout && props.pole==6)
      {
            return (
                  <input type="text" onChange={props.onAboutInputChange} value={props.YourProfile.newData.newAbout}/> 
              )
      }
      else if (props.YourProfile.isChangableWhoFind && props.pole==7)
      {
            return (
                  <input type="text" onChange={props.onWhoFindInputChange} value={props.YourProfile.newData.newWhoFind}/> 
              )
      }
             else
      {
            return(
                  <div>

                  </div>
            )
      }
}
export default AreaForText;