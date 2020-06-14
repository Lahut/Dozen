import React, { Component, useState } from 'react';
import '../../../src/App.css';
import axios from 'axios';
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
        if(this.state.password !== this.state.password2){
            console.log('password not match');
        }else{
            const User ={
                username: this.state.username,
                password: this.state.password2,
                email: this.state.email
    
            }

            try{
                const config = {
                    headers:{
                        'Content-Type' : 'application/json'
                    }
                }
                const body = JSON.stringify(User);
                
                const res = await axios.post('/users/add',body,config);

                console.log(res.data);

            }catch(err){
                console.error(err.response.data);
            }
            
        }

    }
    

    

    render() {
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

export default Register
