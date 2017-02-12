import {createStore, applyMiddleware} from 'redux';
const logger = require('redux-logger');

const middleware = applyMiddleware(logger());

import reducer from './reducers'

export default createStore(reducer, middleware)