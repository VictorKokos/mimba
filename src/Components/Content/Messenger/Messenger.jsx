import React from 'react';
import { useState } from 'react';
import otpravit from './message.png'
import S from './Messenger.module.css'
const Messenger = (props) => 
{
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const handleSubmit = (e) => {
      e.preventDefault();
      setMessages([...messages, text]);
      setText('');
  }

  return (<>

<div className={S.glav}>
  <div className={S.ramka} ><img src={props.photo} /></div>
  <div id={S.ggg} > {props.name} </div>
</div>


      <div id={S.message}>
          {messages.map((element, index) => (
              <div className={S.messageer} key={index}>
                  {element}
              </div>
          ))}
        

           
         
      </div>
      <form onSubmit={handleSubmit} className={S.vvod}>
            
      <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
      />
       <button
type="submit"

>
<img src={otpravit} alt="Отправить" />
</button>

  </form>

  </>
  
  );
}

export default Messenger;