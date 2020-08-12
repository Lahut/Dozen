import { combineReducers } from 'redux';
import alertReducer from './AlertReducer';
import authReducer from './authReducer';
import profileReducer from './ProfileReducer';
const rootReducer = combineReducers({  //เวลา actions เรียกใช้จะส่งเข้ามาที่นี่
    alertReducer,
    authReducer,
    profileReducer
});

export default rootReducer;