import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CounterAction from '../Actions/CounterAction'
import Counter from './Counter'

export class ReduxCounterForm extends Component {
    render() {

        const { counterReducers, counterActions } = this.props

        return (
            <div>
                <Counter
                    counterValue = { counterReducers.value }
                    counterActions = { counterActions }
                />
            </div>
        );
    }
}

ReduxCounterForm.propTypes = {
    counterReducers: PropTypes.object.isRequired,
    counterActions: PropTypes.object.isRequired
};

export const mapStateToProps = (state, ownProps) => ({
    counterReducers : state.CounterReducer
})

export const mapDispatchToProps = (dispatch, ownProps) => ({
    counterActions : bindActionCreators(CounterAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterForm);
