import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import store from './store';


import './index.css';

import App from './components/app/index';

import Firebase, { FirebaseContext } from './firebase';


ReactDOM.render(
        <FirebaseContext.Provider value={new Firebase()}>
            <Provider store={store}>
                <App />
            </Provider>
        </FirebaseContext.Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
