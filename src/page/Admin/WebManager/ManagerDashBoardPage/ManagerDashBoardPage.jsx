import React, { useState } from 'react';
import ManagerBoard from '../../../../components/ManagerDashBoardMenu/ManagerBoard';
import ManagerComment from '../../../../components/ManagerDashBoardMenu/ManagerComment';
import ManagerReview from '../../../../components/ManagerDashBoardMenu/ManagerReview';
import ManagerUser from '../../../../components/ManagerDashBoardMenu/ManagerUser';
import { useQuery } from 'react-query';
import { instance } from '../../../../apis/util/instance';
import { confirmAlert } from '../../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function ManagerDashBoardPage(props) {

    const [info, setInfo] = useState({
        userList: {},
        reviewList: {},
        boardList: {},
        commentList: {},
    })

    console.log(info);
    const ManagementInfo = useQuery(
        ["managementInfo"],
        async () => {
            const response = await instance.get("/owner/recent");
            console.log(response);
            return response;
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setInfo(response.data);
                console.log(response + "!!");
            },
            onError: () => {
                confirmAlert("정보를 가져오지 못했습니다")
            }
        }
    )


    console.log(info.userList.length);
    return (
        <div css={s.layoutStyle}>
            {
                ManagementInfo.isLoading
                    ?
                    <></> :
                    info.userList.length &&
                    <>
                        <div css={s.twinboard}>
                            <div css={s.rowStyle}>
                                <ManagerUser user={info?.userList} />
                            </div>
                            <div css={s.rowStyle}>
                                <ManagerBoard board={info?.boardList} />
                            </div>
                        </div>
                        <div css={s.twinboard}>
                            <div css={s.rowStyle}>
                                <ManagerComment comment={info?.commentList} />
                            </div>
                            <div css={s.rowStyle}>
                                <ManagerReview review={info?.reviewList} />
                            </div>
                        </div>
                    </>
            }
        </div>
    );
}

export default ManagerDashBoardPage;