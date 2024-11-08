import { useMutation, useQueryClient } from "react-query";
import { instance } from "../util/instance";
import { useEffect, useState } from "react";
import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";


const useCheckInputApi = () => {
  const queryClient = useQueryClient();
  const [errorData, setErrorData] = useState({
    isError: false,
    errorField: "",
    errorName: "",
    errorMessage: "",
    error: null,
  })

  useEffect(() => {
    if (errorData.isError) {
      confirmAlert(errorData.errorMessage);
    }
  }, [errorData])

  const mutation = useMutation(
    "updateUserField",
    async ({ fieldName, value }) => await instance.put(`/user/info/${fieldName}`, { fieldName, value })
  );

  const duplicatedCheck = async (fieldName, value) => {
    let getResponse;
    let putResponse;

    try {
      getResponse = await instance.get(`/user/duplicated/${fieldName}?value=${value}`);
      try {
        putResponse = await mutation.mutateAsync({ fieldName, value });
        confirmAlert("변경완료");
        setErrorData({
          idError: false,
          errorField: "",
          errorName: "",
          errorMessage: "",
          error: null,
        })
        queryClient.invalidateQueries("userManagementInfo");
      } catch (e) {
        confirmAlert("변경실패");
      }
    } catch (e) {
      console.log("중복!!!")
      setErrorData(errorData => ({
        ...errorData,
        isError: true,
        errorField: fieldName,
        errorName: `${fieldName}중복`,
        errorMessage: e.response.data.errorMessage,
      }));
    }
  };

  return {
    duplicatedCheck,
    errorData
  }
};

export default useCheckInputApi;