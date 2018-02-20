import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayCounter extends Component {
    render() {

        const { value, handleIncrement, handleDecrement } = this.props

        return (
            <div>
                <p>{value}</p>
                <button onClick={handleIncrement}>INCREMENT</button>
                <button onClick={handleDecrement}>DECREMENT</button>
            </div>
        );
    }
}

DisplayCounter.propTypes = {
    value : PropTypes.number.isRequired,
    handleIncrement : PropTypes.func.isRequired,
    handleDecrement : PropTypes.func.isRequired
};

export default DisplayCounter;