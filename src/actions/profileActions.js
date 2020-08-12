import axios from 'axios';
import { setAlert } from './alertActions'
import {
    GET_PROFILE,
    PROFILE_ERROR
}from './types';

export const getCurrentProfile = () => async dispatch => {
    try{

        const res = await axios.get('/profile/me');
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

//update 

export const UpdateProfile = (formData) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }

        }

        const res = await axios.post('/profile', formData , config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Profile Updated','success'))

    } catch (err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')));
        }

        
        
    }
}

