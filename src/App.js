import React,{ Component } from 'react'
import SearchField from './components/SearchField/SearchField.js'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       searchField : '',
       city : '',
       time : '',
       weather : '',
       desc : '',
       temp : '',
       count : 0
    }
  }

  componentDidMount () {
      this.getLocation();
  } 


  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.count > 1){
       const API_KEY = 'cfaef784e5b4540ea5c23799273b2dfa';
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`
       fetch(url)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
              city : this.state.city,
              time : 'cari sendiri',
              weather : data.weather[0].main,
              desc : data.weather[0].description,
              temp : (data.main.temp - 273).toFixed(2) + ' deg celcius',
              count : this.state.count - 1
            })
        })
    }
  }

  getLocation = ()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }
  }

  showPosition = (position) =>{
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const time = new Date(position.timestamp);
    const API_KEY = 'cfaef784e5b4540ea5c23799273b2dfa';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`

    fetch(url)
      .then(response=>response.json())
      .then(data=>{

        this.setState({
          city : data.name,
          time : time.toLocaleString()  ,
          weather : data.weather[0].main,
          desc : data.weather[0].description,
          temp : (data.main.temp - 273).toFixed(2) + ' deg celcius',
          count : this.state.count + 1
        })
      })
  }

  handleChange = (e) =>{
    this.setState({
      searchField : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    const cityName = (this.state.searchField).toLowerCase();
    this.setState({
      city : cityName,
      count : this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <SearchField
          placeholder = "Enter a city"
          type = "search"
          handleSubmit = {this.handleSubmit}
          handleChange = {this.handleChange}
        />
        <p>{this.state.city}</p>
        <p>{this.state.time}</p>
        <p>Temperatur : {this.state.temp}</p>
        <p>{this.state.weather}</p>
        <p>{this.state.desc}</p>
      </div>
    )
  }
}

export default App