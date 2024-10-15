import React from "react";

function CustomMarker({ cafe, setIsClick }) {

  return (
    <div className="wrap">
      <div className="info">
        <div className="title">
          {cafe.cafeName}
          <div
            className="close"
            onClick={() => setIsClick(false)}
            title="닫기"
          >
            이벤트 닫기
          </div>
        </div>
        <div className="body">
          <div className="desc">
            <div className="ellipsis">{cafe.address}</div>
            <div className="jibun ellipsis">{cafe.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMarker;
