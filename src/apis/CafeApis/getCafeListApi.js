import { useQuery } from "react-query";
import { instance } from "../util/instance";

export const useCafeQuery = (check, inputvalue) => {
    return useQuery(
        ["cafeQuery"],
        async () => {
            const cafeList = await instance.get(`/cafe/get/${check}/${inputvalue}`);
            return cafeList.data;
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );
};