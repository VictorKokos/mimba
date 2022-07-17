import React from 'react';
import S from './Name.module.css'
import { useState } from 'react';

const Text = (props) =>
{
const [val,SetVal] = useState("");
const HandleChange = (event) =>
{
SetVal(event.target.value)
}
if(props.show)
{
    props.updateData(val)
    return <textarea value={props.saveInf} onChange={HandleChange}></textarea>
}
else 
{
    return <div></div>
}
}
const Butt = (props) =>
{
if(props.show)
{
    return  <button>
    Готово
    </button>
}
else 
{
    return <div></div>
}
}


const Name = () => 
{
   
    const [showVvod, setShowVvod] = useState(false)
    const [inf, setInf] = useState("Ваше имя")
    
    return(
        <div className={S.name}>
            <div onClick={() =>setShowVvod(true)} className={S.stroka}>{inf}</div>
          <Text show={showVvod} updateData={setInf} saveInf = {inf}/>
          <div onClick={() =>{setShowVvod(false); }}>
   <Butt show={showVvod} />
     </div>
     </div>
    )
}

export default Name;