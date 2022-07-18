let CHANGE_NAME = "CHANGE_NAME"
let CHANGE_AGE = "CHANGE_AGE"
let CHANGE_COUNTRY = "CHANGE_COUNTRY"
let CHANGE_CITY = "CHANGE_CITY"
let CHANGE_GENDER = "CHANGE_GENDER"
let CHANGE_ABOUT = "CHANGE_ABOUT"
let CHANGE_INTERES = "CHANGE_INTERES"
let CHANGE_MEET = "CHANGE_MEET"
let CHANGE_WHOFIND = "CHANGE_WHOFIND"
let LET_CHANGING = "LET_CHANGING"

export let ChangeNameActionCreator = (text) =>
{
    return {
        type : CHANGE_NAME,
        text : text
    }
}

export let ChangeAgeActionCreator = (text) =>
{
    return {
        type : CHANGE_AGE,
        text : text
    }
}

export let ChangeCountryActionCreator = (text) =>
{
    return {
        type : CHANGE_COUNTRY,
        text : text
    }
}

export let ChangeCityActionCreator = (text) =>
{
    return {
        type : CHANGE_CITY,
        text : text
    }
}

export let ChangeGenderActionCreator = (text) =>
{
    return {
        type : CHANGE_GENDER,
        text : text
    }
}

export let ChangeAboutActionCreator = (text) =>
{
    return {
        type : CHANGE_ABOUT,
        text : text
    }
}

export let ChangeInteresActionCreator = (text) =>
{
    return {
        type : CHANGE_INTERES,
        text : text
    }
}

export let ChangeMeetActionCreator = (text) =>
{
    return {
        type : CHANGE_MEET,
        text : text
    }
}

export let ChangeWhoFindActionCreator = (text) =>
{
    return {
        type : CHANGE_WHOFIND,
        text : text
    }
}
export let LetChangingActionCreator = () =>
{
    return{
        type:LET_CHANGING
    }
}
let initialState =
{
name:'введите ваше имя',
age: 'введите ваш возраст',
country: 'Ваша страна',
city:'город',
gender:'пол',
about: 'Добавьте информацию о себе',
interes:'Добавьте информацию о себе',
meet:'Добавьте информацию о себе',
whoFind:'Добавьте информацию о себе',
isChangable: false,
changingText: 'Изменить профиль'
}

let YourProfileReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case CHANGE_NAME:{
            return {
                ...state,
                name:action.text
            }
        }
        case CHANGE_AGE:{
            return {
                ...state,
                age:action.text
            }
        }
        case CHANGE_COUNTRY:{
            return {
                ...state,
                country:action.text
            }
        }
        case CHANGE_CITY:{
            return {
                ...state,
                city:action.text
            }
        }
        case CHANGE_GENDER:{
            return {
                ...state,
                gender:action.text
            }
            
        }
        case CHANGE_ABOUT:{
            return {
                ...state,
                about:action.text
            }
    }
    case CHANGE_INTERES:{
        return {
            ...state,
            interes:action.text
        }
}
case CHANGE_MEET:{
    return {
        ...state,
        meet:action.text
    }
}
case CHANGE_WHOFIND:{
    return {
        ...state,
        whoFind:action.text
    }
}
case LET_CHANGING:{
    return{
        ...state,
        isChangable:!state.isChangable,
        changingText:'подтвердить'
    }
    }
default: return state
    }
}
export default YourProfileReducer