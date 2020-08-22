import React, { useState } from 'react'
import dateformat from 'dateformat'


const DisplayData = ({ data }) => {

	const now = new Date();
	const date = dateformat(now,"dddd, mmmm d")


	if(data && !data.error){
		const city = data.location.name;
		const country = data.location.country;
		const temp = data.current.temp_c;
		const condition = data.current.condition.text;
		return (
			<div className="display-data">
				<div className="top">
					<i class="logo wi wi-night-alt-partly-cloudy"></i>
					<div className="description">
						<div className="location">{city}, {country}</div>
						<div className="time">{date}</div>
					</div>
				</div>
				<div className="bottom">
					<h1 className="temp">{temp}&deg;C</h1>
					<p>{condition}</p>
				</div>
			</div>
		)
	} else if (data && data.error){
		return <p className="error">No matching location found.</p>
	}else{
		return <p className="loading">Loading...</p>
	}
}

export default DisplayData