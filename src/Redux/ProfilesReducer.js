import users from '../Source/Users';

import { createAction, createReducer } from "@reduxjs/toolkit"


export let setUsers = createAction('SET_USERS')

let n=0


  let initialState =
{
    PrInf:
    [

],
maxLength : 12
}
  


let ProfilesReducer = createReducer(initialState,
  {
    [setUsers] : (state)=>
    {
       
      
    
          
        state.PrInf.push(...users.slice(n, n+6))
          n = n+6;
      
    }
  })

export default ProfilesReducer