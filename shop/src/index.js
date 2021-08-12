import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

let alertInitiate = true;

function reducer2(state = alertInitiate, action) {
    if (action.type === 'close') {
        state = false;
    }

    return state;
}

let initiate = [
    {
        id: 1,
        name: 'AMD',
        quan: 2,
    },
    {
        id: 2,
        name: 'Intel',
        quan: 3,
    },
];

function reducer(state = initiate, action) {
    if (action.type === 'add') {
        let copy = [...state];
        copy.push(action.payload);

        return copy;
    } else if (action.type === 'plus') {
        let copy = [...state];
        copy[0].quan++;
        return copy;
    } else if (action.type === 'minus') {
        let copy = [...state];
        copy[0].quan--;
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
