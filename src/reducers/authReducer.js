import { types } from "../types/types";

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
};

export const cartReducer = (state = initialState, action) =>{
    switch (action.type) {
            case types.authStartLogin:
                return{
                    ...state,
                   
                    
                }
    
            default:
                return state;
    }
}