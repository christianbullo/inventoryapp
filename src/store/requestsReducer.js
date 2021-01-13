import { REQUESTS } from "../assets/shared/requestsData";
import * as ActionTypes from "./ActionTypes";

export const Requests = (state = REQUESTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REQUEST:
            const request = action.payload;
            let lastId = state.length;
            request.id = ++lastId;
            request.requestdate = new Date().toISOString();
            request.requestuser = "guest";
            return state.concat(request); 
            break;
    
        case ActionTypes.DELETE_REQUEST:
            const toDeleteId = action.payload;
            return state.filter(request => request.id !== toDeleteId); 
            break;

        default:
            return state;
    }
}