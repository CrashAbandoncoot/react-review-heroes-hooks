import {createStore, combineReducers, applyMiddleware} from 'redux';
import { heroListReducer } from './HeroListReducer.jsx';
import logger from 'redux-logger';

const store = createStore(combineReducers({
    heroList: heroListReducer
}),
applyMiddleware(logger)
);

export default store;