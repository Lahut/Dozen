import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.ToLogin = this.ToLogin.bind(this);
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
    async ToLogin (e){

        e.preventDefault();

        if(this.state.password !== this.state.password2){
            this.props.setAlert('Password do not match','danger');
        }

    }
    

    render() {
        return (
            <div className="container login-form">
                <h1 style={{textAlign:'center'}}>Login</h1>
                <br/>
                <br/>
                <h4 style={{display:'inline',margin:'10px'}}>Username</h4>
                    <input type="text" id="login"/>
                    <br />
                    <br />
                    <h4 style={{display:'inline',margin:'10px'}}>Password</h4>
                    <input type="password" id="login"/>
                    <br/>
                    <br />
                    <Link to="/register"><h6 style={{margin:'11px'}}>Don't have an account ?</h6></Link>
                    <button  style={{marginLeft:'10px'}}type="button" class="btn btn-secondary">Login</button>
            </div>
        )
    }
}

export default Login
