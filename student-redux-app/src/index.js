import ReactDOM from 'react-dom';
// import ReduxOne from './ReduxOne'
// import ReduxTwo from './ReduxTwo'
// import store from './AddStudent'
// import store from './DeleteStudent'
import store from './CombineReducers'

// console.log(ReduxOne);
// console.log(ReduxTwo);
console.log(store.getState());

const name = 'Redux'
ReactDOM.render(name, document.getElementById('root'));
