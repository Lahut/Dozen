import React, { Component, Fragment,useState } from 'react'
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//Redux
export class App extends Component {
  
  render() {
    return (
    
      <Router>
        <Fragment>
          <Navbar />
          <section>
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
}

export default App

