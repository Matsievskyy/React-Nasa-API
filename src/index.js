import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppReducer from './store/reducers/app_reducer';

const rootReducer = combineReducers({
    astronomy: AppReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(promise)
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
