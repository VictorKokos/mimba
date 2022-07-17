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
    messageCount++;
    let newMessage =
      {
        id:messageCount, message:action.message
      }
     return{
      ...state,
      Messages : [...state.Messages, newMessage], //Вместо push
      NewMessage:{
        ...state.NewMessage,
        text : ""
      }
    }
  
  }
  case CHANGE_NEW_MESSAGE:
  {
    return {
      ...state,
      NewMessage : 
      {
        ...state.NewMessage,
        text : action.textFromTextarea
      }
    }
  }
  default: return initialState
}
}
export default MessengerSupportReducer