import React, { Component } from 'react';
import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import {  Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import axios from 'axios';

class App extends Component {


  constructor(props){
    super(props)
    this.state={
      isRegister: false,
      redirect: false
    }
  }

  renderRouter() {
    return(
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path ="login" component={Login}/>
      </Switch>
    );
  }
  
  





  

  render(){
    if ( this.state.redirect === true){
      return(
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      );
    }
    return(
      <div className="container-fluid" id="firstpage">
        <div className="FirstBox">
          <div className="row">
            <div className="col">
              <h1>Dozen</h1>
            </div>
            <div className="col">
              {(this.state.isRegister) ? <Register changeToLogin={() => this.setState({isRegister:false})}/> : 
              <Login changeToRegister={() => this.setState({isRegister:true})}
                      redirect={() => this.setState({redirect: true})}/>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
