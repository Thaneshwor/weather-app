import React from "react";
import "../App.css";

const Titles = () => (

    <div className="header">
        <a href="#default" className="logo">Find Weather</a>
        <div className="header-right">
            <a href="#country" className='country-title' >Country</a>
            <a href="#contact"><img src={require("./../imgs/flag.png")} className="flag" /></a>
        </div>
    </div>
);

export default Titles;