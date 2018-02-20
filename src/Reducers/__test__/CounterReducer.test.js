import CounterReducer from '../CounterReducer'
import * as actionTypes from '../../Constants/ActionTypes'


describe('Counter Reducer', () => {

    it('should return the initial state', () => {
        const expectedReducer = {
            value: 0
        }
        expect(CounterReducer(undefined, {})).toEqual(expectedReducer)
    })

    it('should handle increment', () => {
        const expectReducer = {
            value: 2
        }
        const prevState = {
            value:1
        }
        const actions = {
            type: actionTypes.increment
        }
        expect(CounterReducer(prevState,actions)).toEqual(expectReducer)
    })

    it('should handle decrement', () => {
        const expectReducer = {
            value: 0
        }
        const prevState = {
            value:1
        }
        const actions = {
            type: actionTypes.decrement
        }
        expect(CounterReducer(prevState,actions)).toEqual(expectReducer)
    })
    
})