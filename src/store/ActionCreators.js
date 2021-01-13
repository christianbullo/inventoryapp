import * as ActionTypes from "./ActionTypes";

export const addRequest = (request) => ({
    type: ActionTypes.ADD_REQUEST,
    payload: {...request} 
})

export const deleteRequest = (request) => ({
    type: ActionTypes.DELETE_REQUEST,
    payload: request.id 
})

export const addOrder = (order) => ({
    type: ActionTypes.ADD_ORDER,
    payload: {...order} 
})
