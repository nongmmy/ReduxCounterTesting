import * as actionTypes from '../Constants/ActionTypes'


export const IncrementAction = () => {
    return {
        type: actionTypes.increment
    }
}

export const DecrementAction = () => {
    return {
        type : actionTypes.decrement
    }
}