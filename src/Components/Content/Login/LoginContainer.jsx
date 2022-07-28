import Login from "./Login";
import { connect } from "react-redux";
import {changeNewName, changeName} from '../../../Redux/YourProfileReducer'
import {checkIfNameFilled, checkIfEmailFilled} from '../../../Redux/LoginReducer'
let mapStateToProps = (state) =>
{
    return{
        Login:state.Login
    }
}

let ConnectedLogin = connect (mapStateToProps, {changeNewName, changeName, checkIfNameFilled, checkIfEmailFilled}) (Login)
export default ConnectedLogin;