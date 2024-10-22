import { instance } from "../util/instance";

export const usersignupApi = async (loginState) => {
    let signupData = {
        isSuccess:false,
        ok : {
            message : "",
            user : null
        },
        fieldErrors: [
            {
                field: "",
                defaultMessage: ""
            }
        ]
    }
    console.log(loginState);

    try {
    const response = await instance.post("/user/signup" , loginState)
    console.log(response);
    signupData = {
        isSuccess: true ,
        ok: response.data
    }
    }catch(error){
    console.error(error);
    const response = error.response;
    console.log(error.response);
    if(error.response.status === 500){
        const errorMessage = error.response.data
        console.log("1");
        return errorMessage;
    }
    if(!response.isSuccess){
        signupData = {
            isSuccess:false,
            fieldErrors:({
                field : loginState.username,
                defaultMessage : error.response.data
            })
        }
        const errorMessage = error.response.data;
        console.log("2");
        return errorMessage;
    }
    signupData = {
        isSuccess:false,
        fieldErrors: response.data.map(fieldError => ({
            field : fieldError.field,
            defaultMessage : fieldError.defaultMessage
        })),       
    }
    console.log("3");
    return signupData;
    }
    return signupData;

}

