import React from 'react';

function CommentInfo({info}) {
    return (
        <div>
                        {info.map((result, index) => (
                            <div > {/* 고유한 key 추가 */}
                                <div>{result.board_id}</div>
                                <div>{result.content}</div>
                                <div>{result.write_date}</div>
                                <div> </div>
                            </div>
                        ))}
                    </div>
    );
}

export default CommentInfo;