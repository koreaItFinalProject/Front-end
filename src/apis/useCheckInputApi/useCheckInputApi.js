import { useMutation, useQueryClient } from "react-query";
import { instance } from "../util/instance";


const useCheckInputApi = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async ({ modifyUser ,check }) => {
      let user ={
        [check]: modifyUser 
      }
      const response = await instance.get(`/user/check/${modifyUser}`);
      
      await instance.put(`/user/${check}`, user);

      return response;
    },
    {
      onSuccess: (response) => {
        console.log("성공:", response);
        alert(`${response.data}`);
        queryClient.invalidateQueries("userManagementInfo");
      },
      onError: (error) => {
        alert(error + "오류가 발생했습니다.");
      }
    }
  );

  return mutation;
};

export default useCheckInputApi;