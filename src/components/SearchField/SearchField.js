import React from 'react'
import '../SearchField/SearchField.scss'

const SearchField = ({type,placeholder,handleChange}) => {
	return (
		<div className="search">
			<input 
				type= {type} 
				placeholder={placeholder}
				onChange = {handleChange} 
			/>
		</div>
	)
}

export default SearchField