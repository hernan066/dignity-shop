import { types } from "../types/types";
import axios from "axios";

export const starLogin = (email, password)=>{
    return async(dispatch)=>{

        try {
            const res = await axios.post('https://dignity-shop.herokuapp.com/api/auth', {email, password});
            console.log(res.data)
        } catch (error) {
            console.log(error)

        }
    }
}