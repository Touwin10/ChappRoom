import { combineReducers } from '@reduxjs/toolkit';
import { authentication } from './auth.reducer';
import { userReducer } from './user.reducer';
import { chatReducer } from './chat.reducer';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const rootReducer = combineReducers({
    authentication,
    userReducer,
    chatReducer,
    router: connectRouter(history),
});

export { rootReducer, history };