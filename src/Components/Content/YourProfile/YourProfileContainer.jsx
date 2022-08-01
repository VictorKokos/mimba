import YourProfile from './YourProfile'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {saveNewPhoto} from '../../../Redux/YourProfileReducer'
let mapStateToProps = (state) =>
{
    return{
        YourProfile:state.YourProfile
    }
}

let YourProfileContainer = compose(
    connect(mapStateToProps, {saveNewPhoto}),
 
)
(YourProfile)


export default YourProfileContainer;