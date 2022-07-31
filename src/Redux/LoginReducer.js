import {createAction, createReducer} from '@reduxjs/toolkit'

export const letEnter = createAction('letEnter')

export const changeNameField = createAction('changeName', (text) => {return {payload:
  {
    text:text
  }}})
  export const changeEmailField = createAction('changeEmail', (text) => {return {payload:
    {
      text:text
    }}})
  export const returnToLogin = createAction('returnToLogin')

export const checkNameField = createAction('checkIfNameFilled')
export const checkEmailField = createAction('checkIfEmailFilled')
  let initialState =
{
  isAuth:false,
        areFilled:
        {
            isNameFilled:false,
            isEmailFilled:false
        },
        Fields:
        {
          name:'',
          email:''
        }
}
  

const LoginReducer = createReducer( initialState, {
  [checkNameField]:(state) =>
  {
    if(state.Fields.name)
    {
      state.areFilled.isNameFilled = true
    }
    else
    {
        state.areFilled.isNameFilled = false;
    }
  },
  [changeNameField] : (state, action) =>
  {
    state.Fields.name = action.payload.text
   
  },
  [changeEmailField] : (state, action) =>
  {
    state.Fields.email = action.payload.text
  },
  [checkEmailField] : (state) =>
  {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
   const result = pattern.test(state.Fields.email);
   if(result)
   {
    state.areFilled.isEmailFilled = true;
   }
   else
   {
    state.areFilled.isNameFilled = false;
   }
  },
  [returnToLogin] : (state) =>
  {
    state.areFilled.isNameFilled = false;
    state.areFilled.isEmailFilled = false;
    state.isAuth = false;
  },
  [letEnter] : (state) =>
  {
    state.isAuth = true
  }
  
      
 
  }
)

export default LoginReducer;