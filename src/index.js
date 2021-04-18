import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './Controller';
import { Provider } from "react-redux";
import { persistor, store } from './config/store';


ReactDOM.render(
    <Provider store={store}>
        <Controller />
    </Provider>

    , document.getElementById('root'));

registerServiceWorker();
