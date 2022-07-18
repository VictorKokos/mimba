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
whoFind:'Добавьте информацию о себе'
}

let YourProfileReducer = (state = initialState, action) =>
{
return state
}
export default YourProfileReducer