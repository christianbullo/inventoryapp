import { STOCK } from "../assets/shared/stockData";

export const Stock = (state = STOCK, action) => {
    switch (action.type) {
        case 'value':
            
            break;
    
        default:
            return state;
    }
}