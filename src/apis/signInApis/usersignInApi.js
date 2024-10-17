import { instance } from "../util/instance";

export const usersignInApi = async (isLogin) => {
    let signinData = {
        isSuccess : false,
        token: null,
        fieldErrors: [
            {
                field: "",
                defaultMessage: ""
            }
        ]
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
        console.log(error.response);
        const response = error.response;
        console.log(signinData);
        signinData = {
            isSuccess : false
        }
        if(response.status === 403){
            signinData['errorStatus'] = "validEmail";
            signinData['error'] = response.data
            
            return signinData;
        }

        if(typeof(response.data) === 'string'){
            signinData['errorStatus'] = "loginError";
            signinData['error'] = response.data;
            console.log(signinData['error']);
        }else {
            signinData['errorStatus'] = "fieldError";
            signinData['error'] = response.data.map(fieldError => ({
                field: fieldError.field,
                defaultMessage : fieldError.defaultMessage
            }));
            console.log(signinData['error']);
        }
    }
    return signinData;
}