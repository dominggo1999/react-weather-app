import React from 'react'
import './weather-icons-master/css/weather-icons.css'
import './WeatherDisplay.scss'

const WeatherDisplay = ({city,iconClass ,temp, minTemp, maxTemp, description, dataReady, err}) => {

	if(dataReady && !err){
		return (
			<div className = "weather-display">
				<h1>{city}</h1>
				<div className="weather-icon">
					<i className={`wi ${iconClass}`}></i>
				</div>
				<div className="temperature">{temp}&deg;C</div>
				<div className="minmax">
					<div className="min">{minTemp}&deg;C</div>
					<div className="max">{maxTemp}&deg;C</div>
				</div>
				<div className="description">{description}</div>
			</div>
		)
	} else if(err) {
		return(
			<div className="error-message">Sorry, there is no data from the location</div>
		)
	} else {
		return(
			<div className="no-data"></div>
		)
	}
}

export default WeatherDisplay