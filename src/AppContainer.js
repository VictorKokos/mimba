import App from "./App";
import { connect } from "react-redux";
import {NavHoc} from './hoc/NavigateHOC'

let mapStateToProps = (state) =>
{
    return{
         isAuth:state.Login.isAuth
     
    }
}
let AppContainer = connect (mapStateToProps) (NavHoc(App))

export default AppContainer;