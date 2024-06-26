import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import {logerMiddlesware} from './middleware';
import { thunk } from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));


const middleware = applyMiddleware(thunk, logerMiddlesware);

const store = createStore(rootReducer, middleware);



root.render(
  <React.StrictMode>
    <Provider store={store}> 
  
    <App //value={store.getState()} 
   //onIncrement={() => store.dispatch({ type:'INCREENT'})}
  // onDecrement={() => store.dispatch({ type:'DECREMENT'})}
    
    />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
