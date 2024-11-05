import { instance } from "../util/instance"

export const ownercheckApi = async (data) => {
    let cafeData = {
        isSuccess: false,
    }
    console.log(data);

    try {
        const response = await instance.post("/cafe/add", data);
        console.log(response);
        cafeData = {
            isSuccess: true,
        }
        return cafeData;
    } catch (error) {
        console.error(error);
        cafeData = {
            isSuccess: false
        }
    }
    return cafeData;
}