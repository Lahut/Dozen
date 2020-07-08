import React, { Component, Fragment,useEffect } from 'react'
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Dashboard from './Components/dashboard/Dashboard';
import Kyc from './Components/kyc/Kyc';
import PrivateRoute from './Components/routing/PrivateRoute';
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
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <Fragment>
              <Navbar />
              <section>
                <Alert />
                <Switch>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/register' component={Register}/>
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                  <PrivateRoute exact path='/kyc' component={Kyc}/>
                </Switch>
              </section>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <h1>DOZEN</h1>
              <Footer />
            </Fragment>
          </Router>
        </div>
      </div>
    );
  }

export default App

