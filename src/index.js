import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { AppContainer } from 'react-hot-loader'
import Layout from './Layout'
import { Provider } from 'react-redux'
import configureStore from './Store/Store'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <Layout/>
        </AppContainer>
    </Provider>,
    document.getElementById('root')
)
  