import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
export class Login extends Component {

    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.ToLogin = this.ToLogin.bind(this);
        this.state={
            username:'',
            password:''
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
    async ToLogin (e){

        e.preventDefault();

        const {username,password} = this.state;
        this.props.login({username,password});
    }

    


    render() {
        // Redirect if logged in 
        if(this.props.isAuthenticated) {
            return <Redirect to="/dashboard"/>
        }
        return (
            <div className="container login-form">
                <h1 style={{textAlign:'center'}}>Login</h1>
                <br/>
                <br/>
                <h4 style={{display:'inline',margin:'10px'}}>Username</h4>
                    <input onChange={this.onChangeUsername} value={this.state.username} type="text" id="login"/>
                    <br />
                    <br />
                    <h4 style={{display:'inline',margin:'10px'}}>Password</h4>
                    <input onChange={this.onChangePassword} value={this.state.password} type="password" id="login"/>
                    <br/>
                    <br />
                    <Link to="/register"><h6 style={{margin:'11px'}}>Don't have an account ?</h6></Link>
                    <button  style={{marginLeft:'10px'}}type="button" class="btn btn-secondary" onClick={this.ToLogin}>Login</button>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
