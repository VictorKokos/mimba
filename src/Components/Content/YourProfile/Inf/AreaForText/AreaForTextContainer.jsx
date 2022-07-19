import AreaForText from './AreaForText'
import {connect} from 'react-redux'
let mapStateToProps = (state) =>
{
    return{
        YourProfile:state.YourProfile
    }
}

let AreaForTextContainer = connect(mapStateToProps) (AreaForText)
export default AreaForTextContainer;