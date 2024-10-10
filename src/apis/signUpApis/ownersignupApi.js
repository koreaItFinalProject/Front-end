import { instance } from "../util/instance";

export const ownersignupApi = async (loginState, isAddress) => {
    let signupData = {
        isSuceess : false,
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
    console.log(loginState);
    console.log(isAddress);
        try {
            const requestData = {
                ...loginState,
                address: isAddress.address + (isAddress.isText ? isAddress.isText : '')
            };
            const response = await instance.post(`/user/signup`);
            console.log(response);
            signupData = {
                isSuceess : true,
                ok: response.data
            }
        }catch(error){
            console.error(error);
            const response = error.response;
            signupData = {
                isSuceess:false,
                fieldErrors:response.data.map(
                    fieldError => ({
                        field : fieldError.field,
                        defaultMessage: fieldError.defaultMessage
                    })),
                }
            return signupData;
        }
    }
