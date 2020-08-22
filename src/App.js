import React, { useState, useMemo } from 'react'
import DisplayData from './DisplayData'
import './App.scss'

const App = () => {
	const API_KEY = 'c18fdf7e433946bc881144552202008';  
	// let url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [data, setData] = useState();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleCityChange = (e) =>{
		setCity(e.target.value);
	} 

	const handleCountryChange = (e) =>{
		setCountry(e.target.value);
	}

	const handleSubmit = (e) =>{
		e.preventDefault();

		let url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

		const callApi = async () =>{
			await fetch(url)
				.then(res=>res.json())
				.then(result=>{
					setData(result);
				});
		}

		callApi();
		// Kosongkan input field
		setCity('');
		setCountry('');
		setIsSubmitted(true);
	}

	// Hanya render display data saat datanya berubah
	const displayData = useMemo(() => {
		return <DisplayData data={data}/>
	}, [data])

	return (
		<div className="weather-app">
			<div className="container">
				<form onSubmit={handleSubmit}>
					<input onChange={handleCityChange} value={city} type="text" required placeholder="Enter city.."/>
					<input onChange={handleCountryChange} value={country} type="text" required placeholder="Enter country.."/>
					<button type="submit">Enter</button>
				</form>
				{
					isSubmitted
					 ? displayData
					 : null
				}
			</div>
		</div>
	)
}

export default App