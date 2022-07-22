import Profile from "./Profile/Profile";
import Profiles from "./Profiles";
import {connect} from 'react-redux'
import {SetUsersActionCreator, EmptyActionCreator} from './../../../Redux/ProfilesReducer'

let mapStateToProps = (state) =>
{
    return {
       Profiles : state.Profiles
    }
}
let mapDispatchToProps = (dispatch) =>
{
    
    return {
        setUsers:(users) =>{ dispatch(SetUsersActionCreator(users))},
        empty: () => {dispatch(EmptyActionCreator())}
    }
}

const ProfilesContainer = connect(mapStateToProps, mapDispatchToProps) (Profiles)
export default ProfilesContainer