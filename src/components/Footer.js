import React, { Component } from 'react';
import "../App.css";

export class Footer extends Component {
    render() {
        return (

            <div className="footer-wrapper footer" >
                <div className=" container-max-width" id="footer">
                    <ul>
                        <li>&copy; 2017-</li>
                        <li><a href="#" title="moies">Movies</a></li>
                        <li>All Right Reserved</li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Footer;
