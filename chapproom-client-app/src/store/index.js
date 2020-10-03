import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { history, rootReducer } from './../reducers/index';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

const loggerMiddleware = createLogger();

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware(history)
  )
);
