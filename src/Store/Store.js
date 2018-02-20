import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from '../Reducers/Assemble'

const loggerMiddleware = createLogger()

export default function configureStore(){
    return createStore(reducer, applyMiddleware(thunkMiddleware))
}
