import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer }  from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import _ from 'lodash';


const loadState = () => {
    try {
        const localState = localStorage.getItem('state');
        if (localState === null) {
            return undefined;
        }
        return JSON.parse(localState);
    } catch (err) {
        return undefined;
    }
};
const persistedState = loadState();

let store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, logger)
);

store.subscribe(_.throttle(() => {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem('state', serializedState);
}),1000);

export default store;