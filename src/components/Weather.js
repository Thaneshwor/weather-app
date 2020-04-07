import React from "react";
import WeatherInfo from "./WeatherInfo";
import "../App.css";
import "../assets/css/style.css";

const Weather = (props) => (
    <div className='weather-container container-max-width'>
        <div className='weather-container-in'>
            {
                props.country &&
                <WeatherInfo info={props.country} title='Country : ' />
            }
            {
                props.city &&
                <WeatherInfo info={props.city} title='City : ' />
            }

            {
                props.temperature &&
                <WeatherInfo info={props.temperature} title='Temperature : ' />
            }

            {
                props.humidity &&
                <WeatherInfo info={props.humidity} title='Humidity : ' />
            }
            {
                props.description &&
                <WeatherInfo info={props.description} title='Description : ' />
            }

            {
                props.error &&
                <p><WeatherInfo info={props.error} title='' /> </p>
            }

        </div>
    </div>
);

export default Weather;