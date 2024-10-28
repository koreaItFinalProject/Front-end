import React from 'react';
import UserInfo from '../Info/UserInfo/UserInfo';
import BoardInfo from '../Info/BoardInfo/BoardInfo';
import CommentInfo from '../Info/CommentInfo/CommentInfo';
import AlramInfoPage from '../../page/MyPage/AlramInfoPage/AlramInfoPage';

function UserMapageContent({ check, info }) {

    return (
        <div>
            {
                check === "user" ?
                    <UserInfo info={info} />
                    :
                    check === "board" ?
                        <BoardInfo info={info} />
                        :
                        check === "comment" ?
                            <CommentInfo info={info} />
                            :
                            check === "info" ?
                                <AlramInfoPage info={info} />
                                : <></>
            }
        </div >
    );
}

export default UserMapageContent;