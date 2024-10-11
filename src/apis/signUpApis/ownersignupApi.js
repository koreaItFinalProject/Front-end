import { instance } from "../util/instance";

export const ownersignupApi = async (loginState) => {
    
    let signupData = {
        isSuccess : false,
        ok: {
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
        console.log(signupData);
        try {
            const response = await instance.post("/owner/signup",loginState);
            console.log(response);
            signupData = {
                isSuccess : true,
                ok: response.data
                }
            console.log(signupData);
            console.log(response.data.user.id);
            // console.log(signupData.ok.id);
            return signupData;
        }catch(error){
            console.error(error);
            const response = error.response;
            signupData = {
                isSuccess:false,
                fieldErrors:response.data.map(
                    fieldError => ({
                        field : fieldError.field,
                        defaultMessage: fieldError.defaultMessage
                    })),
                }
            return signupData;
        }
    }
