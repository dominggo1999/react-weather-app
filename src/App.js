import React from 'react'
import CardList from './components/CardList/CardList.js'
import SearchField from './components/SearchField/SearchField.js'
import './App.scss'

export class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monsters : [],
       searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({monsters : users})) 
  }

  handleChange = (e) =>{
    this.setState({
      searchField : e.target.value
    })
  }

  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchMonster;
    const{monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })

    const result = filteredMonsters.length !== 0 ? 
    <CardList monsters = {filteredMonsters}/>
    : <h1 className="no-result">Not Found</h1>


    return(
      <div className = "app">
        <h1 className = "title">Monster Finder</h1>
        <SearchField
          type = "search"
          placeholder = "Monster"
          handleChange = {this.handleChange}
        />
        {result}
      </div>
    )
  }
}


export default App