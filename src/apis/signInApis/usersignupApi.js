import { instance } from "../util/instance";

export const usersignupApi = async(loginState, isAddress) => {
    let response = null;

    try {
        const requestData = {
            ...loginState,
            address: isAddress.address + (isAddress.isText ? isAddress.isText : '')
        };
        response = instance.post("/user/signup" , requestData)
        console.log(requestData);
        console.log(response);
        }catch(error){
        console.error(error);
    }

    return response;
}

