import axios from 'axios';
import { setAlert } from './alertActions';
import { setAuthToken } from '../utills/setAuthToken';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE,
}from './types';

// Load User
export const loadUser = () => async dispatch => {
    const token = localStorage.getItem('token');
    if(token){
        setAuthToken(token);
    }

    try{
        const res = await axios.get('/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

//Register User

export const register = ({ username,email,password }) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }

    }

    const body = JSON.stringify({ username, email, password});  //เตรียมข้อมูลจาก body
    
    try {
        const res = await axios.post('/users/add',body,config);
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data  // token
        });
        dispatch(setAlert('Register Success.','success'));
        //dispatch(loadUser());
    }catch (err){
        const errors = err.response.data.errors;
        const error = err.response.data.error_msg;
        if(errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg,'danger'));
            });
            
        }else{
            // eslint-disable-next-line no-lone-blocks
            {dispatch(setAlert(error,'danger'));}
        }
        
            
    
        dispatch({
            type: REGISTER_FAIL
        });

    }
    
    
}

// Login User
export const login = ({ username,password }) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }

    }

    const body = JSON.stringify({ username, password});  //เตรียมข้อมูลจาก body
    
    try {
        const res = await axios.post('/auth',body,config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data  // token
        });
        // after login load information of user
        dispatch(loadUser());

    }catch (err){
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        });

    }
    
    
}

//logout

export const logout = () => dispatch => {
    dispatch({
        type: CLEAR_PROFILE
    });
    dispatch({
        type: LOGOUT
    });
}

//Create KYC

export const kycCreate = (values) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }

    }

    const body = JSON.stringify();  //เตรียมข้อมูลจาก body
    
    try {
        const res = await axios.post('/users/kyc/upload',body,config);
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data  // token
        });
        dispatch(setAlert('Sending KYC success! Waiting for approve 2-3 days','success'));
        //dispatch(loadUser());
    }catch (err){
        const errors = err.response.data.errors;
        const error = err.response.data.error_msg;
        if(errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg,'danger'));
            });
            
        }else{
            // eslint-disable-next-line no-lone-blocks
            {dispatch(setAlert(error,'danger'));}
        }
        
            
    
        dispatch({
            type: REGISTER_FAIL
        });

    }
    
    
}