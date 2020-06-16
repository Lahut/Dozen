import { combineReducers } from 'redux';
import alertReducer from './AlertReducer';

const rootReducer = combineReducers({  //เวลา actions เรียกใช้จะส่งเข้ามาที่นี่
    alertReducer
});

export default rootReducer;