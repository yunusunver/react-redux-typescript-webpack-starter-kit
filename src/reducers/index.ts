import { combineReducers } from 'redux';
import DemoReducer from './DemoReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    demo: DemoReducer,
    form: formReducer,
});

export default rootReducer;
