import { instance } from "../util/instance";

const myPageDeleteApi = async (search, id) => {
    console.log(id);
    console.log(search);
    let response = null;
    try {
        response = await instance.delete(`/${search}/${id}`);
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

export default myPageDeleteApi;