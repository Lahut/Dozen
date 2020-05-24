import React , { component, Component } from 'react';
import Navbar from "./navbar";
import { BrowserRouter as Router , Route } from "react-router-dom";




class Home extends Component {

    constructor(props){
        super(props)
    }
    





    render() {
        return(
            <Router>
            <div>
                <Navbar />
                <br/>
                
            </div>
            </Router>
        );
    }



}

export default Home ;