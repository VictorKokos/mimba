import Inf from './Inf'
import {connect} from 'react-redux'
import {ChangeNameActionCreator, ChangeAboutActionCreator, ChangeAgeActionCreator,
ChangeCityActionCreator, ChangeCountryActionCreator, ChangeGenderActionCreator,
ChangeInteresActionCreator, ChangeMeetActionCreator, ChangeWhoFindActionCreator, LetChangingActionCreator} from './../../../../Redux/YourProfileReducer'
let mapStateToProps = (state) =>
{
    return{
        YourProfile:state.YourProfile
    }
}
let mapDispatchToProps = (dispatch) =>
{
    return{
        changeName:(text) =>
        {
            dispatch(ChangeNameActionCreator(text))
        },
        changeAge:(text) =>
        {
            dispatch(ChangeAgeActionCreator(text))
        },
        changeCountry:(text) =>
        {
            dispatch(ChangeCountryActionCreator(text))
        },
        changeCity:(text) =>
        {
            dispatch(ChangeCityActionCreator(text))
        },
        changeGender:(text) =>
        {
            dispatch(ChangeGenderActionCreator(text))
        },
        changeMeet:(text) =>
        {
            dispatch(ChangeMeetActionCreator(text))
        },
        changeWhoFind:(text) =>
        {
            dispatch(ChangeWhoFindActionCreator(text))
        },
        changeInteres:(text) =>
        {
            dispatch(ChangeInteresActionCreator(text))
        },
        changeAbout:(text) =>
        {
            dispatch(ChangeAboutActionCreator(text))
        },
        letChanging:() =>
        {
            dispatch(LetChangingActionCreator())
        }
    }
}
let InfContainer = connect(mapStateToProps, mapDispatchToProps) (Inf)
export default InfContainer;