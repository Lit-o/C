import React from 'react';
import './index.css';
import App from './App';
import store from "./redux/store"
import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom"; //HashRouter work with local
import {HashRouter} from "react-router-dom"; //HashRouter work with local

import {Provider} from "react-redux";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);