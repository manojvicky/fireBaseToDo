import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import config from './App/data/config';
const reducer = (state=[], action) =>{
  if(action.type==="haha"){
    return [...state, "haha"];
  }
  return state;
}
const logger = store => next => action =>{
  console.group(action.type);
  console.log('%c Prev. state', 'color:orange', store.getState());
  console.log('%c Action', 'color:blue', action);
  console.log('%c Next state', 'color:green', store.getState());
  console.groupEnd(action.type);
}
const store = createStore(reducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}), logger),
    reactReduxFirebase(config),
    reduxFirestore(config)
    ));
const action = () =>{
  return (dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    // firestore.collection('todos').add({
    //   text: "added to firebase",
    //   toggle: false,
    //   id: new Date().getTime().toString()
    // });
    console.log("firebase data", firestore.collection('todos'));
    dispatch({type:"yoo"})
  }
}
store.dispatch(action());
console.log("store", store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
