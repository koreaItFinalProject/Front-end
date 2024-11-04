import { instance } from "../util/instance";


export const oauth2MergeApi = async (user) => {
    let mergeData = {
        isSuccess: false,
        token: null,
        fieldErrors: []
    }
    console.log(user);
    try {
        const response = await instance.post("/user/oauth2/merge", user);
        console.log(response);
        mergeData = {
            isSuccess: true,
            token: response.data
        }
    } catch (error) {
        const response = error.response;
        mergeData = {
            isSuccess: false,
        }
        if(response.status === 403){
            mergeData['errorStatus'] = "validEmail";
            mergeData['error'] = response.data.message
            
            return mergeData;
        }
        if(response.status === 500){
            mergeData['errorStatus'] = "serverError";
            mergeData['error'] = response.data.message
            
            return mergeData;
        }

        if(typeof(response.data) === 'string') {
            mergeData['errorStatus'] = "loginError";
            mergeData['error'] = response.data.message;
        }else {
            mergeData['errorStatus'] = "fieldError";
            mergeData['error'] = response.data.map(fieldError => ({
                field: fieldError.field, 
                defaultMessage: fieldError.defaultMessage
            }));
        }
    }

    return mergeData;
}