import React from "react";
import "./../App.css";
import "../assets/css/style.css";

const Form = (props) => (

    <div className='container-max-width'>
        <form className='form-container ' onSubmit={props.getWeather}>
            <input type='text' name='city' placeholder='City' className='city-field'></input>
            <input type='text' name='country' placeholder='Country' className='country-field'></input>
            <button>Get Weather</button>
        </form>
    </div>

);

export default Form;