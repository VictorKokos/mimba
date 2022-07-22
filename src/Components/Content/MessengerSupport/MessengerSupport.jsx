import React from 'react';
import S from './MessengerSupport.module.css'
const MessengerSupport = (props) => 
{
  let AllMessages = props.MessengerSupport.Messages.map((message) =>
   {return <div className = {S.messageArea} key={message.id}>{message.message}</div>})

  let OnAddMessage = () => 
  {
    props.addMessage()
  }
  let OnChangeNewMessage = (e) =>
  {

    var text = e.target.value;
    props.changeNewMessage(text)
  }
 return(
   <div className ={S.messageBoard}>
     <div className = {S.allMessages}>
     {AllMessages}
     </div>
     <div className={S.textareaWithButton}>
     <textarea placeholder='Введите ваше сообщение...' value={props.MessengerSupport.NewMessage.text} onChange={OnChangeNewMessage}></textarea>
     <button  onClick = {OnAddMessage}>
       отправить
     </button>
     </div>
   </div>
 )
}

export default MessengerSupport;