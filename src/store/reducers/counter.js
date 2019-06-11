import * as actionTypes from "../actions";


const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
        const newState = Object.assign({}, state)
        newState.counter = state.counter + 1;
        return newState;
    }
    if (action.type === actionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === actionTypes.INCREMENTWITHFIVE) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === actionTypes.DECREMENTWITHFIVE) {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
   
    return state;
};

export default reducer;