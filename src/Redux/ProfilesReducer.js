import { createAction, createReducer } from "@reduxjs/toolkit"


export let setUsers = createAction('SET_USERS',
 (users) => {return{payload:{users:users}}})




  let initialState =
{
    PrInf:
    [

],
maxLength : 12
}
  


let ProfilesReducer = createReducer(initialState,
  {
    [setUsers] : (state, action)=>
    {
      state.PrInf.push(...action.payload.users)
    }
  })

export default ProfilesReducer