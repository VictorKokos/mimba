import {combineReducers, configureStore } from '@reduxjs/toolkit';
import  YourProfileReducer from './YourProfileReducer';
import  MessengerSupportReducer  from './MessengerSupportReducer';
import ProfilesReducer from './ProfilesReducer'
const allReducers = combineReducers
(

    {
    MessengerSupport:MessengerSupportReducer,
    YourProfile:YourProfileReducer,
    Profiles:ProfilesReducer
}
)

const store = configureStore({
    reducer:allReducers,
    }
)
window.store = store;

export default store;