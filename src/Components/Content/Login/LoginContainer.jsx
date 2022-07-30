import Login from "./Login";
import { connect } from "react-redux";
import {changeNewName, changeName} from '../../../Redux/YourProfileReducer'
import {checkIfNameFilled, checkIfEmailFilled, letEnter} from '../../../Redux/LoginReducer'
let mapStateToProps = (state) =>
{
    return{
        Login:state.Login
    }
}
let LoginContainer = connect (mapStateToProps, {changeNewName, changeName, checkIfNameFilled, checkIfEmailFilled, letEnter})
 (Login)
export default LoginContainer;