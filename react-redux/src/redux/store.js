import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './rootReducer'
// import cakeReducer from './cakes/cakeReducer'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger, thunk)))

export default store