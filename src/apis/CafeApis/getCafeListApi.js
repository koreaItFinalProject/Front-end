import { useQuery } from "react-query";
import { instance } from "../util/instance";

export const useCafeQuery = (check, inputvalue) => {
    return useQuery(
        ["cafeQuery", check, inputvalue],
        async () => {
            const cafeList = await instance.get(`/cafe/get?category=${check}&search=${inputvalue}`);
            return cafeList.data;
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );
};