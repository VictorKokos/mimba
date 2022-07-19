import Inf from './Inf'
import {connect} from 'react-redux'
import {ChangeNameActionCreator, LetChangingNameActionCreator,  ChangeNewNameActionCreator,
    ChangeAgeActionCreator,  ChangeNewAgeActionCreator, LetChangingAgeActionCreator, 
    ChangeCityActionCreator,ChangeNewCityActionCreator,LetChangingCityActionCreator,
    ChangeAboutActionCreator, ChangeNewAboutActionCreator, LetChangingAboutActionCreator,
ChangeInteresActionCreator,ChangeNewInteresActionCreator, LetChangingInteresActionCreator,
 ChangeMeetActionCreator, ChangeNewMeetActionCreator, LetChangingMeetActionCreator,
 ChangeWhoFindActionCreator,ChangeNewWhoFindActionCreator, LetChangingWhoFindActionCreator
 } from './../../../../Redux/YourProfileReducer'
let mapStateToProps = (state) =>
{
    return{
        YourProfile:state.YourProfile
    }
}
let mapDispatchToProps = (dispatch) =>
{
    return{
        changeName:() =>
        {
            dispatch(ChangeNameActionCreator())
        },
        letChangingName:() =>
        {
            dispatch(LetChangingNameActionCreator())
        },
        changeNewName:(text)=>
        {
            dispatch(ChangeNewNameActionCreator(text))
        },



        changeAge:() =>
        {
            dispatch(ChangeAgeActionCreator())
        },
        changeNewAge:(text) =>
        {
            dispatch(ChangeNewAgeActionCreator(text))
        },
        letChangingAge:() =>
        {
            dispatch(LetChangingAgeActionCreator())
        },

    
        changeCity:() =>
        {
            dispatch(ChangeCityActionCreator())
        },
        changeNewCity:(text) =>
        {
            dispatch(ChangeNewCityActionCreator(text))
        },
        letChangingCity:() =>
        {
            dispatch(LetChangingCityActionCreator())
        },



        changeMeet:() =>
        {
            dispatch(ChangeMeetActionCreator())
        },
        changeNewMeet:(text) =>
        {
            dispatch(ChangeNewMeetActionCreator(text))
        },
        letChangingMeet:() =>
        {
            dispatch(LetChangingMeetActionCreator())
        },



        changeWhoFind:() =>
        {
            dispatch(ChangeWhoFindActionCreator())
        },
        changeNewWhoFind:(text) =>
        {
            dispatch(ChangeNewWhoFindActionCreator(text))
        },
        letChangingWhoFind:() =>
        {
            dispatch(LetChangingWhoFindActionCreator())
        },



        changeInteres:() =>
        {
            dispatch(ChangeInteresActionCreator())
        },
        changeNewInteres:(text) =>
        {
            dispatch(ChangeNewInteresActionCreator(text))
        },
        letChangingInteres:() =>
        {
            dispatch(LetChangingInteresActionCreator())
        },



        changeAbout:() =>
        {
            dispatch(ChangeAboutActionCreator())
        },
        changeNewAbout:(text) =>
        {
            dispatch(ChangeNewAboutActionCreator(text))
        },
        letChangingAbout:() =>
        {
            dispatch(LetChangingAboutActionCreator())
        }
    }
}
let InfContainer = connect(mapStateToProps, mapDispatchToProps) (Inf)
export default InfContainer;