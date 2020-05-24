import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component{


    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            username: '',
            password: '',
            email: ''
        }
    }


    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });

    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });

    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });

    }


    onSubmit(e){
        e.preventDefault();

        const user ={
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }

        axios.post('http://localhost:5000/users/add',user)
        .then(res => alert(res.data));

        window.location = "/" ;

    }



    render(){
        return(

            <div>
                <h1>Register</h1>
                <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} style={{margin:"10px",width:"75%"}} placeholder="Username" id="username" aria-label="Username" aria-describedby="basic-addon1"></input>
                <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} style={{margin:"10px",width:"75%"}} placeholder="Email" id="email" aria-label="Email" aria-describedby="basic-addon1"></input>
                <input type="password" value={this.state.password} onChange={this.onChangePassword} style={{margin:"10px",width:"75%"}} class="form-control" id="password" placeholder="Password"></input>
                <input type="password" style={{margin:"10px",width:"75%"}} class="form-control" id="passwordRe" placeholder="Re-Password"></input>
                <button type="button" 
                        class="btn btn-secondary login" 
                        style={{marginLeft:"10px",display:"inline"}} 
                        onClick={this.onSubmit}>Register</button>

                <h4 style={{margin:"10px"}}>Do you already have an account?</h4>
                <button type="button" 
                        class="btn btn-secondary login" 
                        style={{marginLeft:"10px",display:"inline"}} 
                        onClick={this.props.changeToLogin}>Login</button>
            </div>

        )}
}

export default Register;