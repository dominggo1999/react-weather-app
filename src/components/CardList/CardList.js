import React from 'react'
import './CardList.scss'
import Card from '../Card/Card.js'

const CardList = ({ monsters }) => {

	return (
		<div className = "card-list">
			{
              monsters.map(monster =>{
                return (
                	<Card key = {monster.id} monster = {monster}/>
                )
              })
            }
		</div>
	)
}

export default CardList