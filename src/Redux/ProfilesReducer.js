let SET_USERS = "SET_USERS"
let EMPTY = "EMPTY"
export let SetUsersActionCreator = (users) =>
{
  return{
type:SET_USERS,
 users: users
  }
}

export let EmptyActionCreator = () =>
{
  return{
    type:EMPTY
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
    case EMPTY:
      {
        return{
          ...state,
          PrInf:[]
        }
      }
}

return state
}
export default ProfilesReducer