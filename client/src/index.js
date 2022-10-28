import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const defaultState = {
  refs: [],
  rendered: false
}

const rootReducer = (state = defaultState, action) => {
  switch (action.type){
    case "ADD-REF": 
      return {...state, refs: [...state.refs, action.add]}
    case "RESET-REF":
      return {...state, refs: action.reset}
    case "RENDERED": 
      return {...state, rendered: action.rendered}
    default: return state
  }
}

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

