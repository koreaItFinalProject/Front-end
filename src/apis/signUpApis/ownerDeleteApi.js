import { instance } from "../util/instance";

export const ownerDeleteApi = async (userId) => {
    let DeleteData = {
        isSuccess: false,
        ok: {}
    }
    console.log(userId);
    try {
        const response = await instance.delete(`/user/owner/delete/${userId}`);
        console.log(response);
        DeleteData = {
            isSuccess: true,
            ok: response.data,
        }
        console.log(DeleteData);
    } catch (error) {
        console.log(error);
        const response = error.response;
        console.log(response.data);
        alert("삭제실패");
    }

    return ownerDeleteApi;
}