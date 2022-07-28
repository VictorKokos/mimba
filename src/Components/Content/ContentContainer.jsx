import Content from "./Content";
import { connect } from "react-redux";

let mapStateToProps = (state) =>
{
    return{
          Profiles : state.Profiles,
       isAuth:state.YourProfile.isAuth
    }
}
let ContentContainer = connect (mapStateToProps) (Content)

export default ContentContainer;