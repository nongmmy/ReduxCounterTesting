import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DisplayCounter from '../Components/DisplayCounter'

class Counter extends Component {

    constructor(){
        super()
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleIncrement() {
        const { counterActions } = this.props
        counterActions.IncrementAction()
    }

    handleDecrement() {
        const { counterActions } = this.props
        counterActions.DecrementAction()
    }

    render() {

        const { counterValue } = this.props

        return (
            <div>
                <DisplayCounter
                    value = { counterValue } 
                    handleIncrement = { this.handleIncrement }
                    handleDecrement = { this.handleDecrement }
                />
            </div>
        );
    }
}

Counter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    counterActions: PropTypes.object.isRequired
};

export default Counter;