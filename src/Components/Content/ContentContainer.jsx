import Content from "./Content";
import { connect } from "react-redux";

let mapStateToProps = (state) =>
{
    return{
        Profiles : state.Profiles
    }
}
let ContentContainer = connect (mapStateToProps) (Content)
export default ContentContainer;