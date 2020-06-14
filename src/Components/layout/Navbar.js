import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Dozen</a>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/login' className="nav-link" >Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/register' className="nav-link" >Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar


