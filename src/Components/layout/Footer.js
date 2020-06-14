import React, { Component } from 'react'
import './../../../src/footer.css'
export class Landing extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>DOZEN</h4>
                            <ul className="list-unstyled">
                                <li>30495-34234-2</li>
                                <li>Moscow, Russia</li>
                                <li>123 street Unicorn</li>
                            </ul>
                        </div>      
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy; {new Date().getFullYear} DOZEN | All right reserved | Terms Of Service | Privacy
                        </p>

                    </div>
                </div>
            </footer>
        )
    }
}

export default Landing
