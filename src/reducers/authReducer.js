import { types } from "../types/types";

const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.authLogin:
            return{
                ...state,
                ...action.payload,
                isFetching: true,
            }
    
            default:
                return state;
    }
}