import { useMutation, useQueryClient } from "react-query";
import { instance } from "../util/instance";
import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";

export const useMyPageDeleteMutation = (search) => {
    const queryClient = useQueryClient();
    const mutation = useMutation(
        async (id) => {
            await instance.delete(`/${search}/${id}`);
        },
        {
            onSuccess: response => {
                confirmAlert("삭제 성공");
                console.log(response);
                queryClient.invalidateQueries(`userManagementInfo`);
            },
            onError: (error) => {
                confirmAlert(error.response.data);
            }
        }
    );
    return mutation
}