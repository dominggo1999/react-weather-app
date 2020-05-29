import React from 'react'

const SearchField = ({placeholder,type,handleSubmit,handleChange}) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input 
					type={type} 
					placeholder={placeholder}
					onChange = {handleChange}
				/>
				<button type= 'submit'>Search</button>
			</form>
		</div>
	)
}

export default SearchField