import "./App.css";
import React, { useState } from "react";

export function ArrowIcon() {
  const [color, setColor] = useState("#333333"); // 더 진한 색으로 수정
  const [text, setText] = useState("식사 장소");

  return (
    <svg
      className="w-full h-auto" // 크기 조정 추가
      viewBox="0 0 272 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M226.667 0L272 65.5L226.667 131H0L0 0L226.667 0Z" fill={color} />
      <rect
        x="60"
        y="53.5"
        width="24"
        height="24"
        stroke="#E20717"
        strokeWidth="3"
      />
      <text x="100" y="76" fill="black" fontSize="32" textAnchor="start">
        {text}
      </text>
    </svg>
  );
}

function App() {
  const [page, wherePage] = useState(1);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
      <div className="w-[360px] h-[640px] flex">
        <div className="w-1/5 h-full bg-[#FFC915] flex flex-col justify-center">
          <div className="h-1/2 text-[9px] rounded-2xl bg-[#484848] flex flex-col justify-end items-center p-1 space-y-2">
            <button className="!bg-[#FFC915] text-black font-bold">
              ⭐추천메뉴
            </button>
            <button className=" !bg-gray-500 text-white font-bold">
              🍔 버 거
            </button>
            <button className=" !bg-gray-500 text-white font-bold">
              🍟사이드
            </button>
            <button className=" !bg-gray-500 text-white font-bold">
              🥤 음 료
            </button>
            <button className="bg-white text-black font-bold">직원 호출</button>
            <button className="bg-white text-black">기본 화면</button>
            <p className="text-white text-[5px] text-xl mb-8 text-left w-full">
              *지금은 AI 개인 맞춤형 화면입니다.
            </p>
          </div>
        </div>

        {/*메인 콘텐츠 */}
        <div className="grid grid-cols-4 w-full items-center justify-items-center border border-red-500 max-w-[272px]">
          <ArrowIcon />
          <ArrowIcon />
          <ArrowIcon />
          <ArrowIcon />
          <button className="w-11/12 h-16 text-lg font-bold rounded-xl bg-white">
            카드 결제
          </button>
          <button
            className="border-2 border-black w-11/12 h-16 text-lg font-semibold rounded-xl"
            style={{ backgroundColor: "#FFC915", color: "#000000" }}
          >
            간편 결제
          </button>
          <button
            className="border-2 border-black w-11/12 h-16 text-lg font-semibold rounded-xl"
            style={{ backgroundColor: "#FFC915", color: "#000000" }}
          >
            모바일 상품권
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
