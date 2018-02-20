import * as actionTypes from '../Constants/ActionTypes'

const initialState = {
    value: 0
}

export default ( state= initialState, action) => {
    switch(action.type){

        case actionTypes.increment:
            return { ...state, value: state.value + 1 }

        case actionTypes.decrement:
            return { ...state, value: state.value - 1 }

        default:
            return state
            
    }
}