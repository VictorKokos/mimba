import Profile from "./Profile/Profile";
import Profiles from "./Profiles";
import {connect} from 'react-redux'
import {setUsers} from './../../../Redux/ProfilesReducer'

let mapStateToProps = (state) =>
{
    return {
       Profiles : state.Profiles,
       isAuth : state.Login.isAuth
    }
}


const ProfilesContainer = connect(mapStateToProps, {setUsers}) (Profiles)
export default ProfilesContainer