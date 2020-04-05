import React from "react";
import "./../App.css";

const Form = (props) => (

    <form className='form-container' onSubmit={props.getWeather}>
        <input type='text' name='city' placeholder='City'></input>
        <input type='text' name='country' placeholder='Country'></input>
        <button>Get Weather</button>
    </form>

);

export default Form;