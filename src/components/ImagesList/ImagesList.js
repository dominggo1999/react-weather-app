import React from 'react'
import './ImagesList.scss'

const ImagesList = ({images, noData}) => {
	if(noData){
		return (
			<div>
				
			</div>
		)
	}else if (images.length !== 0){
		return (
			<div className="images-list">
				{
					images.map(image=>{
						return(
							<div key={image.id} className="image-container">
								<img src={image.urls.small} alt={image.id}/>
							</div>
						)
					})
				}
			</div>
		)
	} else{
		return (
			<div className = "no-data">
				There is no image in the category
			</div>
		)
	}
}

export default ImagesList