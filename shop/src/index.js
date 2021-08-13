import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

let alertInitiate = true;

function reducer2(state = alertInitiate, action) {
    if (action.type === 'close') {
        state = false;
    }

    return state;
}

let initiate = [
    {
        id: 0,
        name: 'AMD',
        quan: 2,
    },
    {
        id: 1,
        name: 'Intel',
        quan: 3,
    },
];

function reducer(state = initiate, action) {
    if (action.type === 'add') {
        let found = state.findIndex((idx) => {
            return idx.id === action.payload.id;
        });

        if (found >= 0) {
            let copy = [...state];
            copy[found].quan++;
            return copy;
        } else {
            let copy = [...state];
            copy.push(action.payload);
            return copy;
        }
    } else if (action.type === 'plus') {
        let copy = [...state];
        copy[action.payload].quan++;
        return copy;
    } else if (action.type === 'minus') {
        let copy = [...state];
        copy[action.payload].quan--;
        return copy;
    } else {
        return state;
    }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
