import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter)
            dispatch(saveResult(res));
        }, 0);
    }
};

export const deleteResult = (resultElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resultElId
    }
}