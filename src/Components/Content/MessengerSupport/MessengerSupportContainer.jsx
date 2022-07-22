import React from 'react'
import MessengerSupport from './MessengerSupport'
import {addMessage, changeNewMessage} from '../../../Redux/MessengerSupportReducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    MessengerSupport:state.MessengerSupport
  }
  
}

const MessengerSupportContainer = connect (mapStateToProps, {addMessage, changeNewMessage}) (MessengerSupport)
export default MessengerSupportContainer;