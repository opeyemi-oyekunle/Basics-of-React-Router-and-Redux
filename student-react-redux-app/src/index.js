import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import ReduxOne from './ReduxOne'
// import ReduxTwo from './ReduxTwo'
// import store from './AddStudent'
// import store from './DeleteStudent'

// import App from './App'
import store from './MapDispatchToProps/CombineReducers'
import App from './MapDispatchToProps/App'


// console.log(ReduxOne);
// console.log(ReduxTwo);
// console.log(store.getState());

// const name = 'Redux'
//setting up redux in react
// ReactDOM.render(<Provider store={store}><StateToProps/></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
