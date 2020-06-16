import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, //reducer
    initialState, // ค่าเริ่มต้น state
    composeWithDevTools(applyMiddleware(...middleware)) //middleware
);

export default store;