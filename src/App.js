import React from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import store  from './redux/store.js'
import CakeContainer from './components/CakeContainer.js'


class App extends React.Component {
	render() {
		return (
			<Provider store = { store }>
				<div>
					<CakeContainer />
				</div>
			</Provider>
		)
	}
}

export default App