import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../layout/Spinner';

const Dashboard = ({ getCurrentProfile,auth: {user},profile: {profile,loading}}) => {
    useEffect( ()=> {
        getCurrentProfile();
    }, []);
    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
        <i className="fas fa-user"></i>Welcome {user && user.username}</p> 
    </Fragment>                                
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.authReducer,
    profile: state.profileReducer
})


export default connect(mapStateToProps,{ getCurrentProfile })(Dashboard)
