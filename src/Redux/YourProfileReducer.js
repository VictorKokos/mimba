let CHANGE_NAME = "CHANGE_NAME"
let LET_CHANGING_NAME = "LET_CHANGING_NAME"
let CHANGE_NEW_NAME = "CHANGE_NEW_NAME"

let CHANGE_AGE = "CHANGE_AGE"
let CHANGE_NEW_AGE = "CHANGE_NEW_AGE"
let LET_CHANGING_AGE = "LET_CHANGING_AGE"

let CHANGE_CITY = "CHANGE_CITY"
let CHANGE_NEW_CITY = "CHANGE_NEW_CITY"
let LET_CHANGING_CITY = "LET_CHANGING_CITY"

let CHANGE_ABOUT = "CHANGE_ABOUT"
let CHANGE_NEW_ABOUT = "CHANGE_NEW_ABOUT"
let LET_CHANGING_ABOUT = "LET_CHANGING_ABOUT"


let CHANGE_INTERES = "CHANGE_INTERES"
let CHANGE_NEW_INTERES = "CHANGE_NEW_INTERES"
let LET_CHANGING_INTERES = "LET_CHANGING_INTERES"


let CHANGE_MEET = "CHANGE_MEET"
let CHANGE_NEW_MEET = "CHANGE_NEW_MEET"
let LET_CHANGING_MEET = "LET_CHANGING_MEET"



let CHANGE_WHOFIND = "CHANGE_WHOFIND"
let CHANGE_NEW_WHOFIND = "CHANGE_NEW_WHOFIND"
let LET_CHANGING_WHOFIND = "LET_CHANGING_WHOFIND"



export let changeName = () =>
{
    return {
        type : CHANGE_NAME
    }
}
export let letChangingName = () =>
{
    return{
        type:LET_CHANGING_NAME
    }
}
export let changeNewName= (text) =>
{
    return{
        type:CHANGE_NEW_NAME,
        text:text
    }
}



export let changeAge = () =>
{
    return {
        type : CHANGE_AGE
    }
}
export let changeNewAge = (text) =>
{
    return {
        type : CHANGE_NEW_AGE,
        text : text
    }
}
export let letChangingAge = () =>
{
    return {
        type : LET_CHANGING_AGE,
    }
}


export let changeCity = () =>
{
    return {
        type : CHANGE_CITY
    }
}
export let changeNewCity = (text) =>
{
    return {
        type : CHANGE_NEW_CITY,
        text : text
    }
}
export let letChangingCity = () =>
{
    return {
        type : LET_CHANGING_CITY,
    }
}



export let changeAbout = () =>
{
    return {
        type : CHANGE_ABOUT
    }
}
export let changeNewAbout = (text) =>
{
    return {
        type : CHANGE_NEW_ABOUT,
        text : text
    }
}
export let letChangingAbout = () =>
{
    return {
        type : LET_CHANGING_ABOUT,
    }
}




export let changeInteres = () =>
{
    return {
        type : CHANGE_INTERES
    }
}
export let changeNewInteres = (text) =>
{
    return {
        type : CHANGE_NEW_INTERES,
        text : text
    }
}
export let letChangingInteres = () =>
{
    return {
        type : LET_CHANGING_INTERES,
    }
}



export let changeMeet = () =>
{
    return {
        type : CHANGE_MEET
    }
}
export let changeNewMeet = (text) =>
{
    return {
        type : CHANGE_NEW_MEET,
        text : text
    }
}
export let letChangingMeet = () =>
{
    return {
        type : LET_CHANGING_MEET,
    }
}



export let changeWhoFind = () =>
{
    return {
        type : CHANGE_WHOFIND
    }
}
export let changeNewWhoFind = (text) =>
{
    return {
        type : CHANGE_NEW_WHOFIND,
        text : text
    }
}
export let letChangingWhoFind = () =>
{
    return {
        type : LET_CHANGING_WHOFIND,
    }
}




let initialState =
{
name:'введите ваше имя',
age: 'введите ваш возраст',
city:'город',
about: 'Добавьте информацию о себе',
interes:'Добавьте информацию о себе',
meet:'Добавьте информацию о себе',
whoFind:'Добавьте информацию о себе',
isChangableName: false,
isChangableAge: false,
isChangableCity: false,
isChangableAbout: false,
isChangableInteres: false,
isChangableWhoFind: false,
isChangableMeet: false,
newData:
{
newName:'введите ваше имя',
newAge:'',
newCity:'',
newMeet:'',
newWhoFind:'',
newAbout:'',
newInteres:''
}
}

let YourProfileReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case LET_CHANGING_NAME:{
    
            return{
                ...state,
                isChangableName:!state.isChangableName,
            }
            }
        case CHANGE_NEW_NAME:{
                return{
                    ...state,
                    newData: {
                        ...state.newData,
                        newName:action.text
                    }
                }
            }
        case CHANGE_NAME:{
            return {
                ...state,
                name:state.newData.newName
            }
        }



        case CHANGE_AGE:{
            return {
                ...state,
                age:state.newData.newAge
            }
        }
        case LET_CHANGING_AGE:{
    
            return{
                ...state,
                isChangableAge:!state.isChangableAge
            }
            }
        case CHANGE_NEW_AGE:{
                return{
                    ...state,
                    newData: {
                        ...state.newData,
                        newAge:action.text
                    }
                }
            }


        case CHANGE_CITY:{
            return {
                ...state,
                city:state.newData.newCity
            }
        }
        case LET_CHANGING_CITY:{
    
            return{
                ...state,
                isChangableCity:!state.isChangableCity
            }
            }
        case CHANGE_NEW_CITY:{
                return{
                    ...state,
                    newData: {
                        ...state.newData,
                        newCity:action.text
                    }
                }
            }



        case CHANGE_ABOUT:{
            return {
                ...state,
                about:state.newData.newAbout
            }
    }
    case LET_CHANGING_ABOUT:{
    
        return{
            ...state,
            isChangableAbout:!state.isChangableAbout
        }
        }
    case CHANGE_NEW_ABOUT:{
            return{
                ...state,
                newData: {
                    ...state.newData,
                    newAbout:action.text
                }
            }
        }



        case CHANGE_INTERES:{
            return {
                ...state,
                interes:state.newData.newInteres
            }
    }
    case LET_CHANGING_INTERES:{
    
        return{
            ...state,
            isChangableInteres:!state.isChangableInteres
        }
        }
    case CHANGE_NEW_INTERES:{
            return{
                ...state,
                newData: {
                    ...state.newData,
                    newInteres:action.text
                }
            }
        }






        case CHANGE_MEET:{
            return {
                ...state,
                meet:state.newData.newMeet
            }
    }
    case LET_CHANGING_MEET:{
    
        return{
            ...state,
            isChangableMeet:!state.isChangableMeet
        }
        }
    case CHANGE_NEW_MEET:{
            return{
                ...state,
                newData: {
                    ...state.newData,
                    newMeet:action.text
                }
            }
        }





        case CHANGE_WHOFIND:{
            return {
                ...state,
                whoFind:state.newData.newWhoFind
            }
    }
    case LET_CHANGING_WHOFIND:{
    
        return{
            ...state,
            isChangableWhoFind:!state.isChangableWhoFind
        }
        }
    case CHANGE_NEW_WHOFIND:{
            return{
                ...state,
                newData: {
                    ...state.newData,
                    newWhoFind:action.text
                }
            }
        }

default: return state
    }
}
export default YourProfileReducer