import { useMutation, useQueryClient } from "react-query"
import { instance } from "../util/instance";
import { showToast } from "../util/SweetAlert2/Toast/Toast";
import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";

export const useModifyCafeMenuMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (menuImgData) => {
            await instance.put(`/cafe/menu/${menuImgData.cafeId}`, menuImgData);
        },
        {
            onSuccess: () => {
                showToast("메뉴 이미지 변경 완료");
                queryClient.invalidateQueries("cafeDetailQuery");
            }
        },
        {
            onError: () => {
                confirmAlert("메뉴 이미지 변경 실패, 다시 시도하시기 바랍니다.");
                queryClient.invalidateQueries("cafeDetailQuery");
            }
        }
    )
}