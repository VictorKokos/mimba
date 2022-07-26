import {createAction, createReducer} from '@reduxjs/toolkit'




export const addMessage = createAction('ADD_MESSAGE')
export const changeNewMessage = createAction('CHANGE_NEW_MESSAGE', (text) => {return {payload:
  {
    text:text
  }}})


  let initialState =
{
        Messages:
        [
          
        ],
        NewMessage:{text:""},
        messageCount:0,
}
  

const MessengerSupportReducer = createReducer( initialState, {
  [addMessage] : (state) =>
  {
    if(state.NewMessage.text != "")
    {
      state.messageCount++;
      let newMessage =
      {
        id:state.messageCount, message:state.NewMessage
      }
      
      state.Messages.push(newMessage)
      state.NewMessage = {text:""}
    }
  },
  [changeNewMessage]: (state, action) =>
  {
    state.NewMessage = action.payload.text
  }
      
 
  }
)

export default MessengerSupportReducer;