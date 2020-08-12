import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
    
    const authLinks = (

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to='/dashboard' className="nav-link" >
                    <i  style={{display:'inline',margin:'10px'}} className='fas fa-user' />
                    <Link className='hide-sm' to='/profile' >Profile</Link>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" onClick={logout} to="/">
                    Logout
                </Link>
            </li>
        </ul>
        
        

    );

    const guessLinks = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to='/login' className="nav-link" >Login</Link>
            </li>
            <li className="nav-item">
                <Link to='/register' className="nav-link" >Register</Link>
            </li>
        </ul>

    );

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarColor01">
                    <Link to='/' className="navbar-brand" >Dozen</Link>
                    <ul className="navbar-nav mr-auto">

                    </ul>       
                    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guessLinks}</Fragment>) }
                     
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.authReducer
});

export default connect(
    mapStateToProps,{ logout }
)(Navbar);


