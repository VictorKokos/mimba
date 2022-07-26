import YourProfile from './YourProfile'
import {connect} from 'react-redux'
import { compose } from 'redux'
import withLoginNavigate from '../../../HOC/withLoginNavigate'
let mapStateToProps = (state) =>
{
    return{
        YourProfile:state.YourProfile
    }
}

let YourProfileContainer = compose(
    connect(mapStateToProps),
 
)
(YourProfile)


export default YourProfileContainer;