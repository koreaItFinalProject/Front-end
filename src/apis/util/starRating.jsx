import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ averageRating, dimension, spacing }) => {

    return (
        <StarRatings
            rating={averageRating}                     // 현재 별점 값
            starRatedColor="#f2780c"         // 채워진 별의 색상
            numberOfStars={5}                   // 전체 별의 개수
            name="rating"                       // 별점 컴포넌트의 이름
            starDimension={dimension}                // 각 별의 크기
            starSpacing={spacing}                   // 별 사이의 간격
        />
    );
};

export default StarRating;