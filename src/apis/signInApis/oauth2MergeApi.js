import { instance } from "../util/instance";


export const oauth2MergeApi = async (user) => {
    let mergeData = {
        isSuccess: false,
        fieldErrors: [
            {
                field: "",
                defaultMessage: ""
            }
        ]
    }
    console.log(user);
    try {
        const response = await instance.post("/user/oauth2/merge", user);
        console.log(response);
        mergeData = {
            isSuccess: true
        }
    } catch (error) {
        const response = error.response;
        mergeData = {
            isSuccess: false,
        }

        if(typeof(response.data) === 'string') {
            mergeData['errorStatus'] = "loginError";
            mergeData['error'] = response.data;
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