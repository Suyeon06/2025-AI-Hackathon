import "./App.css";
import { useState } from "react";

function App() {
  const [page, wherePage] = useState(1);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
      <div className="w-[360px] h-[640px] flex">
        <div className="w-1/5 h-full bg-[#FFC915] flex flex-col justify-center">
          <div className="h-1/2 text-[9px] rounded-2xl bg-[#484848] flex flex-col justify-end items-center p-1 space-y-2">
            <button className="bg-white text-black font-bold">직원 호출</button>
            <button className="bg-white text-black">기본 화면</button>
            <p className="text-white text-[5px] text-xl mb-8 text-left w-full">
              *지금은 AI 개인 맞춤형 화면입니다.
            </p>
          </div>
        </div>

        {/*메인 콘텐츠 */}
        <div className="w-4/5 h-full flex flex-col justify-center items-center px-4 py-8 bg-[#F5F5F5]">
          <p className="text-3xl mb-4 text-left w-full font-bold">어서오세요</p>
          <p className="text-xl mb-8 text-left w-full">
            주문하시려면 아래 버튼을 눌러주세요.
          </p>
          <div className="flex gap-4">
            {/* 먹고 가기 버튼 */}
            <button
              className="w-32 h-20 text-xl font-semibold rounded-xl"
              style={{ backgroundColor: "#000000", color: "#FFC915" }}
              onClick={() => wherePage(1)}
            >
              먹고 가기
            </button>

            {/* 가져 가기 버튼 */}
            <button
              className="w-32 h-20 text-xl font-semibold rounded-xl"
              style={{ backgroundColor: "#FFC915", color: "#000000" }}
              onClick={() => wherePage(2)}
            >
              가져 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
