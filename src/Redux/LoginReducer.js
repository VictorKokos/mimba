import {createAction, createReducer} from '@reduxjs/toolkit'

export const letEnter = createAction('letEnter')

export const checkIfNameFilled = createAction('checkIfNameFilled', (text) => {return {payload:
  {
    text:text
  }}})
  export const checkIfEmailFilled = createAction('checkIfEmailFilled', (text) => {return {payload:
    {
      text:text
    }}})
  export const returnToLogin = createAction('returnToLogin')



  let initialState =
{
  isAuth:false,
        areFilled:
        {
            isNameFilled:false,
            isEmailFilled:false
        }
}
  

const LoginReducer = createReducer( initialState, {
  [checkIfNameFilled] : (state, action) =>
  {
    if(action.payload.text)
    {
     
        state.areFilled.isNameFilled = true;
    }
    else
    {
        state.areFilled.isNameFilled = false;
    }
  },
  [checkIfEmailFilled] : (state, action) =>
  {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
   const result = pattern.test(action.payload.text);
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