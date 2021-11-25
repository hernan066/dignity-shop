import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    cart: cartReducer,
    ui: uiReducer,
    
    /* ui: uiReducer,
    calendar: calendaReducer,
    auth: authReducer, */
});