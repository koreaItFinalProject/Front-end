import React from 'react';

function ReviewInfo({ info }) {
    return (
        <div>
            {info.map((result, index) => (
                <div > {/* 고유한 key 추가 */}
                    <div>{result.cafeId}</div>
                    <div>{result.cafeName}</div>
                    <div>{result.category}</div>
                    <div>{result.rating}</div>
                    <div>{result.review}</div>
                    <div>{result.writeDate}</div>
                </div>
            ))}
        </div>
    );
}

export default ReviewInfo;