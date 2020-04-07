import React from 'react';
import "../assets/css/style.css";

const WeatherInfo = (props) => (


    <div className='weather-info-wrapper'>
        {
            <p className='weather-info-block'><span className='weather-info-title'>{props.title}</span><span className='weather-info'>{props.info}</span></p>
        }
    </div>

)

export default WeatherInfo;