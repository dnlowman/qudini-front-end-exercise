import { configureStore } from 'redux-starter-kit';
import { combineReducers } from 'redux';
import queue from './Queue/reducer'

const reducer = combineReducers({
    queue
});

export default configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});
