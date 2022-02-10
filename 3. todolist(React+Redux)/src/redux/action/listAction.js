import { ADD_TO_LIST, GET_TO_LIST, REMOVE_LIST, REMOVE_ALL_LIST, UPDATE_LIST } from "../actionTypes/listActionType";

export const getList = () => {
    return {
        type: GET_TO_LIST
    }
}

export const setList = (text) => {
    return {
        type: ADD_TO_LIST,
        payload:text
    }
}

export const updateList = (id, value) => {
    return {
        type: UPDATE_LIST,
        payload:{
            id,
            value
        }
    }
}

export const removeList = (id) => {
    return {
        type: REMOVE_LIST,
        payload:id
    }
}


export const removeAllList = () => {
    return {
        type: REMOVE_ALL_LIST,
    }
}







