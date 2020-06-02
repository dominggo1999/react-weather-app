import { createStore } from 'redux'
import cakeReducers from './cakes/cakeReducers.js'


const store = createStore(cakeReducers);

export default store