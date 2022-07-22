import Inf from './Inf'
import {connect} from 'react-redux'
import {changeName, letChangingName,  changeNewName,
    changeAge,  changeNewAge, letChangingAge, 
    changeCity,changeNewCity,letChangingCity,
    changeAbout, changeNewAbout, letChangingAbout,
changeInteres,changeNewInteres, letChangingInteres,
 changeMeet, changeNewMeet, letChangingMeet,
 changeWhoFind,changeNewWhoFind, letChangingWhoFind
 } from './../../../../Redux/YourProfileReducer'
let mapStateToProps = (state) =>
{
    return{
        YourProfile:state.YourProfile
    }
}

let InfContainer = connect(mapStateToProps, {
    changeName, letChangingName,  changeNewName,
    changeAge,  changeNewAge, letChangingAge, 
    changeCity,changeNewCity,letChangingCity,
    changeAbout, changeNewAbout, letChangingAbout,
changeInteres,changeNewInteres, letChangingInteres,
 changeMeet, changeNewMeet, letChangingMeet,
 changeWhoFind,changeNewWhoFind, letChangingWhoFind}) (Inf)
export default InfContainer;