import React,{ Component } from 'react'
import './App.scss'

const checkInput = /^[0-9]*$/;
class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			 celcius : "",
			 fahrenheit : "",
			 reaumur : "",
			 kelvin : ""
		}
		this.fahrenheitRef = React.createRef();
		this.celciusRef = React.createRef();
	}

	convertFunctCelcius = (e) =>{
		const input = e.target.value.trim();
		const convert = () =>{
			const c = parseInt(input);
			const f = c * 1.8 + 32;
			const re = c * 0.8;
			const k = c + 273.15;
			this.setState({
				celcius : c,
			 	fahrenheit : f,
				reaumur : re,
			 	kelvin : k
			},()=>{
				console.log(this.state);
				this.fahrenheitRef.current._reactInternalFiber.child.child.stateNode.value = this.state.fahrenheit;
			})
		}

		if(input.match(checkInput) && input.length){
			convert();
		}
	}

	convertFunctFahrenheit = (e) =>{
		const input = e.target.value.trim();
		const convert = () =>{
			const f = parseInt(input);
			const c = (f - 32) * 5/9;
			const re = c * 0.8;
			const k = c + 273.15;
			this.setState({
				celcius : 	c,
			 	fahrenheit : f,
				reaumur : re,
			 	kelvin : k
			},()=>{
				console.log(this.state);
				this.celciusRef.current._reactInternalFiber.child.child.stateNode.value = this.state.celcius;
			})
		}

		if(input.match(checkInput) && input.length){
			convert();
		}
	} 

	render(){
		return(
			<div>
				<SearchField ref={this.celciusRef} type="text" placeholder="C" convertFunct = {this.convertFunctCelcius}/>
				<SearchField ref={this.fahrenheitRef} type="text" placeholder="F" convertFunct = {this.convertFunctFahrenheit}/>
			</div>
		)
	}
}


// const SearchField = ({type,placeholder,convertFunct}) =>{
// 	return(
// 		<div>
// 			<input className="celcius-input" type={type} placeholder={placeholder} onChange={convertFunct}/>
// 		</div>
// 	)
// }


class SearchField extends React.Component {
	
	render() {
		return (
			<div>
				<input className="celcius-input" type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.convertFunct}/>
			</div>
		)
	}
}


export default App 

