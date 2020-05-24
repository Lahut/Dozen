import React, { Component } from 'react';
import axios from 'axios';



class Login extends Component {

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);


        this.state={
            redirect: false,
            username:'',
            password:''
        }


    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })

    }
    
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })

    }

    onSubmitLogin(e){

        

    }




    render(){
        return(
            <div>
                
                <h1>Login</h1>
                <input type="text" value={this.state.username} onChange={this.onChangeUsername} class="form-control" style={{margin:"10px",width:"75%"}} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                <input type="password" value={this.state.password} onChange={this.onChangePassword} style={{margin:"10px",width:"75%"}} class="form-control" id="inputPassword3" placeholder="Password"></input>
                <button type="button" 
                        class="btn btn-secondary login" 
                        style={{marginLeft:"10px",display:"inline"}}
                        onClick={this.onSubmitLogin}>Login</button>
                <button type="button" 
                        class="btn btn-secondary login" 
                        style={{marginLeft:"10px",display:"inline"}} 
                        onClick={this.props.changeToRegister}>Register</button>
                
            </div>
            
            
        );       
    }
}

export default Login;