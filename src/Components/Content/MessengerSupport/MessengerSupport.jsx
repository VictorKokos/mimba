import React from 'react';
import S from './MessengerSupport.module.css'
const MessengerSupport = (props) => 
{
  let AllMessages = props.MessengerSupport.Messages.map((message) =>
   {return <div className = {S.messageArea}>{message.message}</div>})

  let OnAddMessage = () => 
  {
    let text = props.MessengerSupport.NewMessage.text
    props.AddMessage(text)
  }
  let OnChangeNewMessage = (e) =>
  {
    let text = e.target.value;
    props.ChangeNewMessage(text)
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