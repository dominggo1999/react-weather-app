import React from 'react'
import './SearchField.scss'

const SearchField = ({type,placeholder,handleSubmit}) => {
	return (
		<div className = "search-weather">
			<form onSubmit = {handleSubmit}>
				<input 
					className = "city-input"
					type={type}
					placeholder={`${placeholder} a city`}
				/>
				<input 
					className = "country-input"
					type={type}
					placeholder={`${placeholder} a country`}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	)
}

export default SearchField