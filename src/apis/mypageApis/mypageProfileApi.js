import { instance } from "../util/instance";

const mypageProfileApi = async (img) => {
    console.log(img);
    let response = null;
    try {
        response = instance.put(`/mypage/profile/img`, {img});
        console.log(response);
    } catch (error) {
        response = error.response;
        alert("이미지 교체 실패")
    }
    return response;

}

export default mypageProfileApi;