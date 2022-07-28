import Header from "./Header";
import { connect } from "react-redux";
import {returnToLogin} from '../../Redux/LoginReducer'
let mapStateToProps = (state) =>
{
    return{
          Profiles : state.Profiles,
       isAuth:state.YourProfile.isAuth
    }
}
let HeaderContainer = connect (mapStateToProps, {returnToLogin}) (Header)

export default HeaderContainer;