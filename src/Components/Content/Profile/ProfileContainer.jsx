import Profile from './Profile'
import {connect} from 'react-redux'
let mapStateToProps = (state) =>
{
    return{
        Profiles:state.Profiles
    }
}
let ProfileContainer = connect(mapStateToProps) (Profile)
export default ProfileContainer;