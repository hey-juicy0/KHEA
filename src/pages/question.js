import React, { useState } from "react";
import './style.css';

const Question = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  // iframe 로드 완료 시 호출
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="question">
      {isLoading && ( // 로딩 중일 때만 표시
        <div className="loading-message">
          <h1>로딩중...잠시만 기다려주세요...</h1>
        </div>
      )}
      <div className="question_forms">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScISM7NmlcDiMRj54AGZxxV7uFOsFWdfYzP6R4okNR8M0cBVQ/viewform?embedded=true"
          width="640"
          height="578"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          onLoad={handleLoad} // iframe 로드 완료 시 호출
          style={{ display: isLoading ? "none" : "block" }} // 로딩 중에는 숨김
        >
          로드 중…
        </iframe>
      </div>
    </div>
  );
};

export default Question;