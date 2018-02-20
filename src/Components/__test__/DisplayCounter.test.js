import React from 'react'
import Enzyme, { mount , shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils';

import DisplayCounter from '../DisplayCounter'

// Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
    
    const handleIncrement = jest.fn()
    const handleDecrement = jest.fn()
    const value = 0

    const wrapper = ReactTestUtils.renderIntoDocument(
        <DisplayCounter 
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            value={value}
        />);

    // const enzymeWrapper = shallow(<DisplayCounter 
    //     handleIncrement={handleIncrement}  
    //     handleDecrement={handleDecrement} 
    //     value={0}
    //     />)

    return {
        handleIncrement,
        handleDecrement,
        value,
        wrapper
    }
}

describe('Display Counter Component', () => {

    it('should render', () => {
        const { wrapper } = setup()
    })
})