import { instance } from "../util/instance";

export const usersignupApi = async (loginState) => {
    let signupData = {
        isSuceess:false,
        ok : {
            message : "",
            user : null
        },
        
    }
    console.log(loginState);

    try {
        const response = await instance.post("/user/signup" , loginState)
        console.log(response);
        signupData = {
            isSuceess: true ,
            ok: response.data
        }
        }catch(error){
        console.error(error);
    }

    return signupData;
}

