import * as CounterActions from '../CounterAction'
import * as actionTypes from '../../Constants/ActionTypes'

describe('Counter Action', () => {

    it('Incremet Action should be create ICREMENT action', () => {
        const expectedAction = {
            type : actionTypes.increment
        }
        expect(CounterActions.IncrementAction()).toEqual(expectedAction)
    })

    it('Decrement Action should be create DECREMENT action', () => {
        const expectedAction = {
            type : actionTypes.decrement
        }
        expect(CounterActions.DecrementAction()).toEqual(expectedAction)
    })

})