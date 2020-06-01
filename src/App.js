import React,{ Component } from 'react'
import './App.scss'
import SearchField from './components/SearchField/SearchField.js'
import ImagesList from './components/ImagesList/ImagesList.js'


const API_KEY = "XpLtXZaW460S37c-bE2wiTZV-NXgv6v2oa0fDOQrOFg";

class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			images: [],
			input : "",
			noData : true,
			page : 0,
			query : ""
		}
	}

	handleChange = (e) =>{
		this.setState({input : e.target.value.toLowerCase()})}

	handleSubmit = (e) =>{
		e.preventDefault();
		const query = this.state.input;
		const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${API_KEY}`;
		
		const getImage = () => fetch(url)
			.then(response =>response.json())
			.then(data => {
				this.setState({
					images : data.results,
					noData : false,
					page : 1,
					query : query
				})
			})
			.catch(err=>{
				console.log(err);
			})

		if(query){getImage()}
	}

	findAnotherImages = (e) =>{
		const nextPage = this.state.page + 1;
		const query = this.state.query;
		const url = `https://api.unsplash.com/search/photos?page=${nextPage}&query=${query}&client_id=${API_KEY}`;

		const getImage = () => fetch(url)
			.then(response =>response.json())
			.then(data => {
				this.setState({
					images : data.results,
					noData : false,
					page : nextPage
				})

				console.log(this.state.page);
			})
			.catch(err=>{
				console.log(err);
			})

		if(query){getImage()}
	}		

	render(){
		return (
			<div>
				<SearchField 
					handleChange = {this.handleChange}
					handleSubmit = {this.handleSubmit}
					type={"text"} 
					placeholder ={"Find image"}
					findAnotherImages = {this.findAnotherImages}
				/>
				<ImagesList images ={this.state.images} noData = {this.state.noData}/>
			</div>
		)
	}
}

export default App

