import {createAction, createReducer} from '@reduxjs/toolkit'

export let changeIsAuth = createAction('CHANGE_IS_AUTH')

export let saveNewPhoto = createAction('saveNewPhoto',
(photo) =>{return{payload:{photo:photo}}})


//Это полный пиздец и это надо фиксить
export let changeName = createAction('CHANGE_NAME')
export let letChangingName = createAction('LET_CHANGING_NAME')
export let changeNewName= createAction('CHANGE_NEW_NAME',
 (text) => {return {payload:{text:text}}})



 export let changeAge = createAction('CHANGE_AGE')
 export let letChangingAge = createAction('LET_CHANGING_AGE')
 export let changeNewAge= createAction('CHANGE_NEW_AGE',
  (text) => {return {payload:{text:text}}})


  export let changeCity = createAction('CHANGE_CITY')
  export let letChangingCity = createAction('LET_CHANGING_CITY')
  export let changeNewCity= createAction('CHANGE_NEW_CITY',
   (text) => {return {payload:{text:text}}})



   export let changeAbout = createAction('CHANGE_ABOUT')
   export let letChangingAbout = createAction('LET_CHANGING_ABOUT')
   export let changeNewAbout= createAction('CHANGE_NEW_ABOUT',
    (text) => {return {payload:{text:text}}})




    export let changeInteres = createAction('CHANGE_INTERES')
    export let letChangingInteres = createAction('LET_CHANGING_INTERES')
    export let changeNewInteres= createAction('CHANGE_NEW_INTERES',
     (text) => {return {payload:{text:text}}})



     export let changeMeet = createAction('CHANGE_MEET')
     export let letChangingMeet = createAction('LET_CHANGING_MEET')
     export let changeNewMeet= createAction('CHANGE_NEW_MEET',
      (text) => {return {payload:{text:text}}})



      export let changeWhoFind = createAction('CHANGE_WHO_FIND')
      export let letChangingWhoFind = createAction('LET_CHANGING_WHO_FIND')
      export let changeNewWhoFind= createAction('CHANGE_NEW_WHO_FIND',
       (text) => {return {payload:{text:text}}})




let initialState =
{
photo: '/images/users/16 (3).png',
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




let YourProfileReducer = createReducer(initialState,
    {
        [saveNewPhoto]:(state,action) =>
        {
            state.photo = action.payload.photo
      
        },

        [changeName] : (state) =>
        {
            state.name = state.newData.newName
        },
        [letChangingName] : (state) =>
        {
            state.isChangableName = !state.isChangableName
        },
        [changeNewName] : (state, action) =>
        {
            state.newData.newName = action.payload.text
        },


        [changeAge] : (state) =>
        {
            state.age = state.newData.newAge
        },
        [letChangingAge] : (state) =>
        {
            state.isChangableAge = !state.isChangableAge
        },
        [changeNewAge] : (state, action) =>
        {
            state.newData.newAge = action.payload.text
        },


        [changeCity] : (state) =>
        {
            state.city = state.newData.newCity
        },
        [letChangingCity] : (state) =>
        {
            state.isChangableCity = !state.isChangableCity
        },
        [changeNewCity] : (state, action) =>
        {
            state.newData.newCity = action.payload.text
        },


        [changeAbout] : (state) =>
        {
            state.about = state.newData.newAbout
        },
        [letChangingAbout] : (state) =>
        {
            state.isChangableAbout = !state.isChangableAbout
        },
        [changeNewAbout] : (state, action) =>
        {
            state.newData.newAbout = action.payload.text
        },


        [changeMeet] : (state) =>
        {
            state.meet = state.newData.newMeet
        },
        [letChangingMeet] : (state) =>
        {
            state.isChangableMeet = !state.isChangableMeet
        },
        [changeNewMeet] : (state, action) =>
        {
            state.newData.newMeet = action.payload.text
        },


        [changeInteres] : (state) =>
        {
            state.interes = state.newData.newInteres
        },
        [letChangingInteres] : (state) =>
        {
            state.isChangableInteres = !state.isChangableInteres
        },
        [changeNewInteres] : (state, action) =>
        {
            state.newData.newInteres = action.payload.text
        },


        [changeWhoFind] : (state) =>
        {
            state.whoFind = state.newData.newWhoFind
        },
        [letChangingWhoFind] : (state) =>
        {
            state.isChangableWhoFind = !state.isChangableWhoFind
        },
        [changeNewWhoFind] : (state, action) =>
        {
            state.newData.newWhoFind = action.payload.text
        },
    }) 
export default YourProfileReducer