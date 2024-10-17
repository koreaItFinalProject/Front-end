import { instance } from "../util/instance";

export const oAuth2SigninApi = async (user) => {
  let signupData = {
      isSuceess: false,
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
  try {
      const response = await instance.post("/oauth/oauth2/signup", user);
      console.log(response);
      signupData = {
          isSuceess: true,
          ok: response.data,
      }
  } catch (error) {
      const response = error.response;
      signupData = {
          isSuceess: false,
          fieldErrors: response.data.map(fieldError => ({
              field: fieldError.field, 
              defaultMessage: fieldError.defaultMessage
          })),
      }
  }

  return signupData;
}