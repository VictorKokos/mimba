import Login from "./Login";
import { connect } from "react-redux";
import {changeNewName, changeName} from '../../../Redux/YourProfileReducer'
import {checkNameField, changeEmailField,
     letEnter, changeNameField, checkEmailField} from '../../../Redux/LoginReducer'
let mapStateToProps = (state) =>
{
    return{
        Login:state.Login
    }
}
let LoginContainer = connect (mapStateToProps, {changeNewName, changeName, checkNameField, checkEmailField, changeEmailField,changeNameField, letEnter})
 (Login)
export default LoginContainer;