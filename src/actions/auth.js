import { types } from "../types/types";
import axios from "axios";
import Swal from 'sweetalert2';

export const starLogin = (email, password)=>{
    return async(dispatch)=>{

        try {
            //const res = await axios.post('https://dignity-shop.herokuapp.com/api/auth/login', {email, password});
            const res = await axios.post('http://localhost:5000/api/auth/login', {email, password});
            console.log(res.data);

            if (res.data.ok) {
                localStorage.setItem('token', res.data.accessToken);
                localStorage.setItem('token-init-date', new Date().getTime());
               
                 dispatch( login ({
                    
                    username: res.data.username,
                    email: res.data.email,
                    isAdmin: res.data.isAdmin,

                })) 
                
            } else{
                Swal.fire('Error', res.data.msg, 'error');

            }

        } catch (error) {
            console.log(error)

        }
    }
};

const login = (user)=>({
    type: types.authLogin,
    payload: user
        
});