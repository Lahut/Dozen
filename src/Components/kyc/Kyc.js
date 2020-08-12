import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import KycForm from './kycForm';
import { reduxForm } from 'redux-form';
const Kyc = ({auth: {user}}) => {
    return (
        <div>
            <h1>Hello {user && user._id}</h1>
            
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
