let ADD_MESSAGE = 'ADD_MESSAGE';
let CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE';


export let addMessageActionCreator = (text) =>({
    type:ADD_MESSAGE,
     message:text 
  })
  export let changeNewMessageActionCreator = (text) =>
  ({
  
    type:CHANGE_NEW_MESSAGE,
     textFromTextarea:text
  
  })

  let initialState =
{
        Messages:
        [
          
        ],
        NewMessage:{text:""}
}
  

let messageCount = 0;
let MessengerSupportReducer = (state = initialState, action) =>
{
 
switch(action.type)
{
  case ADD_MESSAGE :
  {
    let stateCopy = {...state}
    stateCopy.Messages = [...state.Messages]
     
      messageCount = messageCount+1;
      let newMessage =
      {
        id:messageCount, message:action.message
      }
      stateCopy.Messages.push(newMessage)
      return stateCopy
  }
  case CHANGE_NEW_MESSAGE:
  {
    let stateCopy = {...state}
    stateCopy.NewMessage = {...state.NewMessage}
    stateCopy.NewMessage.text = action.textFromTextarea;
    return stateCopy
  }
  default: return initialState
}
}
export default MessengerSupportReducer