import { instance } from "../util/instance";
import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";

const modifyCafeBannerApi = async (cafeId, img) => {
    let response = null;
    try {
        response = await instance.put(`/cafe/banner/${cafeId}`, { cafeId, img });
        return response;
    } catch (error) {
        console.error(error);
        confirmAlert("이미지 교체 실패")
    }
}

export default modifyCafeBannerApi;