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
        signupData = {
            isSuceess:false,
            // field랑 defaultMessage를 사용하겠다
            fieldErrors: response.data.map(fieldError => ({
                field : fieldError.field,
                defaultMessage : fieldError.defaultMessage
            })),
        }
    }

    return signupData;
}

