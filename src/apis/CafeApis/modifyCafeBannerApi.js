import { instance } from "../util/instance";

const modifyCafeBannerApi = async (cafeId, img) => {
    let response = null;
    try {
        response = await instance.put(`/cafe/banner/${cafeId}`, { cafeId, img });
        return response;
    } catch (error) {
        console.error(error);
        alert("이미지 교체 실패")
    }
}

export default modifyCafeBannerApi;