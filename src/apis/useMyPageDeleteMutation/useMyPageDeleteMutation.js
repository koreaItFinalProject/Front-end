import { useMutation, useQueryClient } from "react-query";
import { instance } from "../util/instance";

export const useMyPageDeleteMutation = (search) => {
    const queryClient = useQueryClient();
    const mutation = useMutation(
        async (id) => {
            await instance.delete(`/${search}/${id}`);
        },
        {
            onSuccess: response => {
                alert("삭제 성공");
                console.log(response);
                queryClient.invalidateQueries(`userManagementInfo`);
            },
            onError: (error) => {
                alert(error.response.data);
            }
        }
    );
    return mutation
}