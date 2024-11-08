
import { instance } from "../util/instance";

const emailApi = async (email) => {
    let emailNumber = '';
    try {
        const response = await instance.post("/mail/send", { email })
        console.log(response, email);
        console.log(response);
        emailNumber = {
            number: response.data
        }
        console.log(emailNumber);
        return emailNumber;
    }
    catch (error) {
        const response = error.response;
        console.log(response);
        return "에러뜸"
    }
}


export default emailApi;