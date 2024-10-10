import { instance } from "../util/instance";

export const usersignInApi = async (isLogin) => {

    let signinData = {
        isSuccess : false,
        token: null
    }
    console.log(isLogin);

    try {
        const response = await instance.post("/user/signin", isLogin);
        console.log(response);
        signinData = {
            isSuccess:true,
            token: response.data
        }
    }catch(error) {
        console.error(error);
        const response = error.response;
        console.log(response);
        signinData = {
            isSuccess : false
        }
    }
    return signinData;
}