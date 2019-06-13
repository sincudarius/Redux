import * as actionTypes from './actionTypes';

// this is actionCreators
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const incrementwithfive = (val) => {
    return {
        type: actionTypes.INCREMENTWITHFIVE,
        value: val
    }
}

export const decrementwithfive = (val) => {
    return {
        type: actionTypes.DECREMENTWITHFIVE,
        value: val
    }
}

