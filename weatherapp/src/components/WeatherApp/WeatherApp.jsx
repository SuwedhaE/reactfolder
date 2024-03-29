import React, { useState } from 'react'
import './WeatherApp.css'

import sicon from "../Assets/sicon.png";
import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";
import humidity from "../Assets/humidity.png";

const WeatherApp = () => {

    let api_key ="169b39826fd6063681280528a13637a3";

    const [wicon, setwicon] = useState(cloud);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value ===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp)+"°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setwicon(clear);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setwicon(cloud);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setwicon(drizzle);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setwicon(drizzle);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setwicon(rain);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setwicon(rain);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setwicon(snow);
        }
        else{
            setwicon(clear);
        }
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={sicon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp