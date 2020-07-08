import { combineReducers } from 'redux';
import alertReducer from './AlertReducer';
import authReducer from './authReducer';
import profileReducer from './ProfileReducer';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({  //เวลา actions เรียกใช้จะส่งเข้ามาที่นี่
    alertReducer,
    authReducer,
    profileReducer,
    formReducer
});

export default rootReducer;