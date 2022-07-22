import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import  YourProfileReducer from './YourProfileReducer';
import  MessengerSupportReducer  from './MessengerSupportReducer';
import ProfilesReducer from './ProfilesReducer'
const reducers = combineReducers
(

    {
    MessengerSupport:MessengerSupportReducer,
    YourProfile:YourProfileReducer,
    Profiles:ProfilesReducer
}
)

const store = createStore(reducers)
window.store = store;

export default store;