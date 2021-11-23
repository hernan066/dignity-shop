import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";



export const rootReducer = combineReducers({
    cart: cartReducer,
    
    /* ui: uiReducer,
    calendar: calendaReducer,
    auth: authReducer, */
});