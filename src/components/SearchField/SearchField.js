import React from 'react'
import './SearchField.scss'

const SearchField = ({handleChange, handleSubmit,type, placeholder, findAnotherImages}) => {
	return (
		<div className="form-field">
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type={type} placeholder={placeholder}/>
				<button type="submit">Search</button>
			</form>
			<button className="find-another-images" onClick = {findAnotherImages}>Find Another Images</button>
		</div>
	)
}

export default SearchField