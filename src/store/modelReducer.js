import { ORDERS } from "../assets/shared/ordersData";
import { REQUESTS } from "../assets/shared/requestsData";
import { STOCK } from "../assets/shared/stockData";

export const initialState = {
    orders: ORDERS,
    requests: REQUESTS,
    stock: STOCK
};

export const Reducer = (state = initialState, action) => {
    return state;
}; 

