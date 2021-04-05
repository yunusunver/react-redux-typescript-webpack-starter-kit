import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './index';

export default function ConfigureStore() {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
}
