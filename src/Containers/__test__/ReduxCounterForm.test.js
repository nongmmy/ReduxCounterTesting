import React from 'react'
import Enzyme, { mount , shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils';
import { connect } from 'react-redux';

import { ReduxCounterForm, mapStateToProps, mapDispatchToProps } from '../ReduxCounterForm'

const setup = () => {
    const counterActions = {
      IncrementAction: jest.fn(),
      DecrementAction: jest.fn()
    }
    const counterReducers = {
        value:10
    }
    const wrapper = ReactTestUtils.renderIntoDocument(
        <ReduxCounterForm
            counterReducers={counterReducers}
            counterActions={counterActions}
        />);

    return {
        wrapper,
        counterActions,
        counterReducers
    }
}

describe('test ReduxCounterForm', () => {

    it('should render', () => {
        const { wrapper } = setup()
    })

    it('mapStateToProps should return counter reducer', () => {
        const state = {
          CounterReducer: {
            value: 10
          }
        }
        expect(mapStateToProps(state)).toEqual({
          counterReducers: state.CounterReducer
        })
    })

    it('mapDispatchToProps should return counter action', () => {
        const actions = {

        }
        expect(mapStateToProps(actions)).toEqual({
          counterActions: actions
        })
    })

})
