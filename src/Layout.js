import React, { Component } from 'react'
import config from 'config'

import ReduxCounterForm from './Containers/ReduxCounterForm'

class Layout extends Component {
    render() {
        // console.error('baseServiceUrl', config)
        return (
            <div>
                <ReduxCounterForm />
            </div>
        )
    }
}

export default Layout