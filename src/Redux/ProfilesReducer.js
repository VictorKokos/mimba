import users from '../Source/Users';

import { createAction, createReducer } from "@reduxjs/toolkit"


export let setUsers = createAction('SET_USERS')




  let initialState =
{
  n:0,
    PrInf:
    [

],
maxLength : 12
}
  


let ProfilesReducer = createReducer(initialState,
  {
    [setUsers] : (state)=>
    {
       
      
    
          
        state.PrInf.push(...users.slice(state.n, state.n+6))
          state.n = state.n+6;
      
    }
  })

export default ProfilesReducer