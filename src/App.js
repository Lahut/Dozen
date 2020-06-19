import React, { Component, Fragment,useEffect } from 'react'
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Alert from './Components/layout/Alert';
import { loadUser } from './actions/authActions';
import { setAuthToken } from './utills/setAuthToken';
import store from './index';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const  App = () => {
  
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);


    return (
      <Router>
        <Fragment>
          <Navbar />
          <section>
            <Alert />
            <Switch>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    );
  }

export default App

