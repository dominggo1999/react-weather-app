import React from 'react'
import './Card.scss'


const Card = ( {monster} ) => {
	return (
		<div className = "card-container">
		<img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={monster.name}/>
			  <h1>{monster.name}</h1>
			  <p>{monster.email}</p>
		</div>
	)
}

export default Card