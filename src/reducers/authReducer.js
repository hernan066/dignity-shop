import { types } from "../types/types";

const initialState = {
    user: null,
    checking: false,
    error: false,
};

export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.authStartLogin:
            return{
                ...state,
                isFetching: true,
                error: false,
               
            };
        case types.authLoginSuccess:
            return{
                ...state,
                user:action.payload,
                checking: false,
                error: false,
            };
        case types.authLoginError:
            return{
                ...state,
                checking: false,
                error: true,
               
            };
    
            default:
                return state;
    }
}