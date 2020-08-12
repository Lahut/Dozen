import React, { Component } from 'react'
import { reduxForm,Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {kycCreate} from '../../actions/authActions';
class kycForm extends Component {



    renderFields () {
        const formFields = [
            { name: 'firstName' , type: 'text'},
            { name: 'lastName' , type: 'text'},
            { name: 'Bday' , type: 'date'},
            { name: 'sex' , type: 'text'},
            { name: 'status' , type: 'text'},
            { name: 'tel' , type: 'text'},
            { name: 'addr' , type: 'text'},
            { name: 'passportID' , type: 'file'},
            { name: 'Selfie' , type: 'file'},

        ]

    }

    async onSubmit()  {

    }

    render() {
        const {match} = this.props;
        console.log(match)
        return (
            
            <div className='container'>
                <form className='kycForm'>
                <label>First Name: </label><br/>
                <Field type='text' name='firstName' class="form-control" component='input' /><br/>
                <label>Last Name: </label><br/>
                <Field type='text' name='lastName' class="form-control" component='input'/><br/>
                <label>Birth Day: </label><br/>
                <Field type='date' name='Bday' class="form-control" component='input'/><br/>
                <label>Sex: </label><br/>
                <Field  component='select' class="form-control selectSex" id="exampleFormControlSelect1" name='sex'>
                    <option>Not specified</option>
                    <option>Female</option>
                    <option>Male</option>
                </Field><br/>
                <label>Status: </label><br/>
                <Field  component='select' class="form-control selectSex" id="exampleFormControlSelect1" name='status'>
                    <option>Not specified</option>
                    <option>Marry</option>
                    <option>Single</option>
                </Field><br/>
                <label>Phone: </label><br/>
                <Field type='text' name='tel' class="form-control" component='input'/><br/>
                <label>Address: </label><br/>
                <Field  type='text' name='addr' class="form-control" component='input'></Field><br/>
                <label>Passport ID : </label><br/>
                    <Field type='file' name='file' class="form-control" component='input' value={null} /><br/>       
                <label>Passport ID with Selfie : </label><br/>
                    <Field type='file' name='file' class="form-control" component='input' value={null}/><br/>
                <br/>
                <br/>
                <input type="submit" value="Submit" class="btn btn-primary btn-block"></input>
                </form>
            </div>
        )
    }
}

kycForm = reduxForm({form: 'kycForm'})(kycForm);


const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps,{kycCreate})(kycForm)
