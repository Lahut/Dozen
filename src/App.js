import React, { Component, Fragment,useState } from 'react'
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Alert from './Components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
export class App extends Component {
  
  render() {
    return (
    <Provider store={store}>
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
    </Provider>
    );
  }
}

export default App

