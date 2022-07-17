import Profile from "./Profile/Profile";
import Profiles from "./Profiles";
import {connect} from 'react-redux'

let mapStateToProps = (state) =>
{
    return {
       Profiles : state.Profiles
    }
}

const ProfilesContainer = connect(mapStateToProps) (Profiles)
export default ProfilesContainer