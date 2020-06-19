import { combineReducers } from 'redux';
import alertReducer from './AlertReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({  //เวลา actions เรียกใช้จะส่งเข้ามาที่นี่
    alertReducer,authReducer
});

export default rootReducer;