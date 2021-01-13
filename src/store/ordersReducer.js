import { ORDERS } from "../assets/shared/ordersData";
import * as ActionTypes from "./ActionTypes";

export const Orders = (state = ORDERS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ORDER:
            const order = action.payload;
            let lastId = state.length; 
            order.id = ++lastId; 
            order.orderdate = new Date().toISOString();
            order.orderuser = "guest";
            return state.concat(order); 
            break;
    
        default:
            return state;
    }
}