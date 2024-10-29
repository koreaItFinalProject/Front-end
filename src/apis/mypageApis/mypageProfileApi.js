import { instance } from "../util/instance";

const mypageProfileApi = async (id, img) => {
    let response = null;
    try {
        response = instance.put(`/mypage/profile/${id}`, {
            id, img
        });
    } catch (error) {
        response = error.response;
        alert("이미지 교체 실패")
    }

}

export default mypageProfileApi;