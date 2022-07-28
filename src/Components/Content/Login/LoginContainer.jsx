import Login from "./Login";
import { connect } from "react-redux";
import {changeIsAuth} from '../../../Redux/YourProfileReducer'
let mapStateToProps = (state) =>
{
    return{
         
    }
}

let ConnectedLogin = connect (mapStateToProps, {changeIsAuth}) (Login)
export default ConnectedLogin;