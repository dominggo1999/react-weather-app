import React,{ Component } from 'react'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay.js'
import SearchField from './components/SearchField/SearchField.js'
import './App.scss'


const API_KEY = 'cfaef784e5b4540ea5c23799273b2dfa';

class App extends Component {
  constructor(props) {
  	super(props)
  
  	this.state = {
  		 city:'',
  		 temp : '',
  		 minTemp : '',
  		 maxTemp : '',
  		 description : '',
  		 iconClass : '',
  		 err : false ,
  		 dataReady : false
  	}

  	this.icons = {
  		Thunderstorm: "wi-thunderstorm",
	    Drizzle: "wi-sleet",
	    Rain: "wi-storm-showers",
	    Snow: "wi-snow",
	    Atmosphere: "wi-fog",
	    Clear: "wi-day-sunny",
	    Clouds: "wi-day-fog"
  	}
  }

	getWeatherClass = (icons, rangeId) =>{
		switch (true) {
		  case rangeId >= 200 && rangeId < 232:
		    this.setState({ iconClass: icons.Thunderstorm });
		    break;
		  case rangeId >= 300 && rangeId <= 321:
		    this.setState({ iconClass: icons.Drizzle });
		    break;
		  case rangeId >= 500 && rangeId <= 521:
		    this.setState({ iconClass: icons.Rain });
		    break;
		  case rangeId >= 600 && rangeId <= 622:
		    this.setState({ iconClass: icons.Snow });
		    break;
		  case rangeId >= 701 && rangeId <= 781:
		    this.setState({ iconClass: icons.Atmosphere });
		    break;
		  case rangeId === 800:
		    this.setState({ iconClass: icons.Clear });
		    break;
		  case rangeId >= 801 && rangeId <= 804:
		    this.setState({ iconClass: icons.Clouds });
		    break;
		  default:
		    this.setState({ iconClass: icons.Clouds });
		}
	}

	changeToCelcius = (t) => Math.floor(t - 273.15);


 	handleSubmit = (e) =>{
  	e.preventDefault();
	  	const city = e.target.querySelector(".city-input");
	  	const country = e.target.querySelector(".country-input");

	  	if(city.value && country.value){
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}}&appid=${API_KEY}`;
			
			fetch(url)
				.then(response=>response.json())
				.then(data=>{
					console.log(data.weather);
					this.setState({
						city : `${data.name}, ${data.sys.country}`,
						temp : this.changeToCelcius(data.main.temp),
						minTemp : this.changeToCelcius(data.main.temp_min),
						maxTemp : this.changeToCelcius(data.main.temp_max),
						description :  data.weather[0].description,
						dataReady : true,
						err : false
					})

					// Get weather class
					this.getWeatherClass(this.icons, data.weather[0].id);

					city.value = "";
					country.value = "";
				})
				.catch(err=>{
					this.setState({
						err : true
					})
				})
	  	}
  	}

  render() {
    return (
      <div>
      	<SearchField
      		type = 'text'
      		placeholder = "Enter"
      		handleSubmit = {this.handleSubmit}
      	/>
		<WeatherDisplay
	    	city = {this.state.city}
	    	iconClass = {this.state.iconClass}
	    	temp = {this.state.temp}
	    	minTemp = {this.state.minTemp}
	    	maxTemp = {this.state.maxTemp}
	    	description = {this.state.description}
	    	dataReady = {this.state.dataReady}
	    	err = {this.state.err}
    	/>
      </div>
    )
  }
}

export default App