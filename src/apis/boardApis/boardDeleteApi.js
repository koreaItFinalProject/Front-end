import { instance } from "../util/instance";

const boardDeleteApi = async (id) => {
    console.log(id);
    let response = null;
    try {
        response = await instance.delete(`/board/${id}`);
        if (response.status === 200) {
            alert("삭제 성공");
            return response
        } else {
            alert("삭제 실패");
            return response
        }
    } catch (error) {
        response = error.response;
    }
}

export default boardDeleteApi;