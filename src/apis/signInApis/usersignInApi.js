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
        const response = error.response;
        console.log(response);
        signinData = {
            isSuccess : false
        }
        if(response.status === 403){
            signinData['errorStatus'] = "validEmail";
            signinData['error'] = response.data;
            return signinData;
        }

        if(typeof(response.data) === 'string'){
            signinData['errorStatus'] = "loginError";
            signinData['error'] = response.data;
        }else {
            signinData['errorStatus'] = "fieldError";
            signinData['error'] = response.data.map(fieldError => ({
                field: fieldError.field,
                defaultMessage : fieldError.defaultMessage
            }));
        }
    }
    return signinData;
}