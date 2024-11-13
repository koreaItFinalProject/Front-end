import { useQuery } from "react-query"
import { instance } from "../util/instance"

export const useCafeNoticeListQuery = () => {
    return useQuery(
        ["cafeNoticeListQuery"],
        async () => {
            const noticeList = await instance.get(`/board/notice`);
            return noticeList.data;
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );
};