import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alertActions';
import { register } from '../../actions/authActions';
import PropTypes from 'prop-types';
import '../../../src/App.css';
export class Register extends Component {

    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.ToRegister = this.ToRegister.bind(this);
        this.state={
            username:'',
            password:'',
            password2:'',
            email:''
        }

    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        //console.log(e);
        this.setState({
            password: e.target.value
        });
    }

    onChangePassword2(e){
        this.setState({
            password2: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    async ToRegister (e){

        e.preventDefault();
        const {username,email,password} = this.state;

        if(this.state.password !== this.state.password2){
            this.props.setAlert('Password do not match','danger');
        }else{
            this.props.register({ username,email,password });
        }
        
    }


    render() {
        // Redirect if logged in 
        if(this.props.isAuthenticated) {
            return <Redirect to="/login"/>
        }
        return (
            <div className="RegisterBox">
                <h1 style={{textAlign:'center'}}>Register</h1>
                <br />
                <br />
                <div className="container">
                    <h4 style={{display:'inline',margin:'10px'}}>Username</h4>
                    <input type="text" id="login" value={this.state.username} onChange={this.onChangeUsername}/>
                    <br />
                    <br />
                    <h4 style={{display:'inline',margin:'10px'}}>Email</h4>
                    <input type="email" id="login" value={this.state.email}  onChange={this.onChangeEmail}/>
                    <br />
                    <br />
                    <h4 style={{display:'inline',margin:'10px'}}>Password</h4>
                    <input type="password" id="login" value={this.state.password} onChange={this.onChangePassword}/>
                    <br />
                    <br />
                    <h4 style={{display:'inline',margin:'10px'}}>Re-Password</h4>
                    <input type="password" id="login" value={this.state.password2} onChange={this.onChangePassword2}/>
                    <br />
                    <br />
                    <br />
                    <button type="button" class="btn btn-secondary" onClick={this.ToRegister}>Register</button>
                </div>
                
            </div>
            
        )
    }
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
    mapStateToProps, 
    { setAlert , register}
)(Register);
