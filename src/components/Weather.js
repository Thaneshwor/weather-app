import React from "react";

const Weather = (props) => (
    <div>
        {
            props.city && props.country &&
            <p>Location: <span className='weather-value'>{props.city}</span>, <span className='weather-value'>{props.country}</span></p>
        }
        {
            props.city &&
            <p>Temperature: <span className='weather-value'>{props.temperature}</span></p>
        }
        {
            props.humidity &&
            <p> Humidity: <span className='weather-value'>{props.humidity}</span></p>
        }
        {
            props.description &&
            <p>Conditions: <span className='weather-value'>{props.description}</span></p>
        }
        {props.error &&
            <p><span className='weather-error'>{props.error}</span></p>}
    </div>
);

export default Weather;