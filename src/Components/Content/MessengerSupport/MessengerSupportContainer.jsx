import React from 'react'
import MessengerSupport from './MessengerSupport'
import {addMessageActionCreator, changeNewMessageActionCreator} from '../../../Redux/MessengerSupportReducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    MessengerSupport:state.MessengerSupport
  }
  
}
let mapDispatchToProps = (dispatch) =>
{
  return {
    AddMessage: (text) => {
      dispatch(addMessageActionCreator(text))
      dispatch(changeNewMessageActionCreator(""))
    },
    ChangeNewMessage: (text) =>
    {
      dispatch(changeNewMessageActionCreator(text))
    }
   }
}
const MessengerSupportContainer = connect (mapStateToProps, mapDispatchToProps) (MessengerSupport)
export default MessengerSupportContainer;