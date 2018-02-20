import React from 'react'
import Enzyme, { mount , shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils';

import Counter from '../Counter'

const setup = () => {
    const counterActions = {
        IncrementAction : jest.fn(),
        DecrementAction : jest.fn()
    }

    const counterValue = 10
    const wrapper = ReactTestUtils.renderIntoDocument(
        <Counter
            counterValue={counterValue}
            counterActions={counterActions}
        />);

    return {
        wrapper,
        counterActions,
        counterValue
    }
}

describe('Display Counter Component', () => {

    it('should render', () => {
        const Counter = setup()
    })

    it('click button INCREMENT should add 1 ', () => {
        const Counter = setup()
        // console.log(Counter.wrapper)
        Counter.wrapper.handleIncrement()
        expect(Counter.counterActions.IncrementAction).toHaveBeenCalled()
    })

    it('click button Decrement should subtract 1 ', () => {
        const Counter = setup()
        Counter.wrapper.handleDecrement()
        expect(Counter.counterActions.DecrementAction).toHaveBeenCalled()
    })

})
