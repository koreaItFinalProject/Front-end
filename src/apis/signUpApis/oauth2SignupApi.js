import { instance } from "../util/instance";

export const oAuth2SignupApi = async (user) => {
  let mergeData = {
    isSuccess: false,
      ok: {
          message: "",
          user: null
      },
      fieldErrors: [
          {
              field: "",
              defaultMessage: ""
          }
      ]
  }

    console.log(user);
  try {
    const response = await instance.post("/user/oauth2/signup", user);
    console.log(response);
    mergeData = {
        isSuccess: true,
        ok: response.data,
        }
    console.log(mergeData);
  } catch (error) {
    console.log(error);
    const response = error.response;
    console.log(response.data);
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
    console.log(mergeData);
  }

  return mergeData;
}