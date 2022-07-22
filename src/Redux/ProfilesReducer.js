let SET_USERS = "SET_USERS"
let EMPTY = "EMPTY"
export let setUsers = (users) =>
{
  return{
type:SET_USERS,
 users: users
  }
}



  let initialState =
{
    PrInf:
    [

],
maxLength : 12
}
  
let ProfilesReducer = (state = initialState, action) =>
{
switch(action.type)
{
  case SET_USERS:
    {
      return{
        ...state,
        PrInf:[...state.PrInf,
               ...action.users]
      }
    }
   
}

return state
}
export default ProfilesReducer