import { createStore, combineReducers } from "redux";
import { Orders } from "./ordersReducer";
import { Requests } from "./requestsReducer";
import { Stock } from "./stockReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            orders: Orders,
            requests: Requests,
            stock: Stock 
        })
    );

    return store; 
}
