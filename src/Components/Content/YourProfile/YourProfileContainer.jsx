import YourProfile from './YourProfile'
import {connect} from 'react-redux'

let mapStateToProps = (state) =>
{
    return{
        YourProfile:state.YourProfile
    }
}
let YourProfileContainer = connect(mapStateToProps) (YourProfile)
export default YourProfileContainer;