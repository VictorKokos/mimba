import {combineReducers, configureStore } from '@reduxjs/toolkit';
import  YourProfileReducer from './YourProfileReducer';
import  MessengerSupportReducer  from './MessengerSupportReducer';
import ProfilesReducer from './ProfilesReducer'
import LoginReducer from './LoginReducer';
const allReducers = combineReducers
(

    {
    MessengerSupport:MessengerSupportReducer,
    YourProfile:YourProfileReducer,
    Profiles:ProfilesReducer,
    Login:LoginReducer
}
)

const store = configureStore({
    reducer:allReducers,
    }
)
window.store = store;

export default store;