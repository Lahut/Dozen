import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import kycForm from './kycForm';
import { reduxForm } from 'redux-form';
const Kyc = ({auth: {user}}) => {
    return (
        <div className="flex-wrapper">
            <h1>Hello {user && user._id}</h1>
            <div className='container'>
                <form className='kycForm'>
                <label>First Name: </label><br/>
                <input type='text' name='firstName' class="form-control"></input><br/>
                <label>Last Name: </label><br/>
                <input type='text' name='lastName' class="form-control"></input><br/>
                <label>Birth Day: </label><br/>
                <input type='date' name='bday' class="form-control"></input><br/>
                <label>Sex: </label><br/>
                <select style={{width:'50%'}} class="form-control selectSex" id="exampleFormControlSelect1" name='sex'>
                    <option>Male</option>
                    <option>Female</option>
                </select><br/>
                <label>Status: </label><br/>
                <select style={{width:'50%'}} class="form-control selectSex" id="exampleFormControlSelect1" name='status'>
                    <option>Single</option>
                    <option>Marry</option>
                </select><br/>
                <label>Tel: </label><br/>
                <input type='text' name='tel' class="form-control"></input><br/>
                <label>Address: </label><br/>
                <input style={{width:'50%'}} type='text' name='addr' class="form-control"></input><br/>
                <label>Passport ID : </label><br/>
                <div class="custom-file mb-3">
                    <input type="file" name="file" id="file" class="custom-file-input"/>
                    <label for="file" class="custom-file-label">Choose File</label>
                </div>
                <label>Passport ID with Selfie : </label><br/>
                <div class="custom-file mb-3">
                    <input type="file" name="file" id="file" class="custom-file-input"/>
                    <label for="file" class="custom-file-label">Choose File</label>
                </div>
                <br/>
                <br/>
                <input type="submit" value="Submit" class="btn btn-primary btn-block"></input>

            </form>
            </div>
        </div>
    )
}

Kyc.propTypes = {
    auth :  PropTypes.object.isRequired
} 

const mapStateToProps = state => ({
    auth: state.authReducer,
    profile: state.profileReducer
})





export default connect(mapStateToProps)(Kyc)
