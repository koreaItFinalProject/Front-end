import { useMutation, useQueryClient } from "react-query";
import { instance } from "../util/instance";

const useCheckInputApi = async (modifyUser, inputUser, Check) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (id) => {
      await instance.get(`/user/check/${Check}`);

    },
    {
      onSuccess: (response) => {
        instance.put(`/user/${Check}`, modifyUser);
        alert("성공");
        console.log(response);
        queryClient.invalidateQueries(`userManagementInfo`);
      },
      onError: (error) => {
        alert(error.response.data);
      }
    }
  );

  return Check;
}

export default useCheckInputApi;