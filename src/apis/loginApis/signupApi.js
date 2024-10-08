import { instance } from "../util/instance";

export const signupApi = async (State , num) => {
    let response = null;
    if(num === 1){
        try {
            response = await instance.post(`/user/signup`);
        }catch(error){
            
        }
    }else if(num === 2) {
        try {
            response = await instance.post(`/owner/signup`);
        }catch(error){
            
        }
    }
    console.log(num);
}