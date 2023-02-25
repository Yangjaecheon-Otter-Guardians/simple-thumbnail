import { useState } from "react";
import ImageUploader from "../components/ImageUploader";

function BackgroundTool() {
  const [tab, setTab] = useState("3");
  const tabChanger = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log((e.target as HTMLInputElement).value);
  };
  return (
    <div className="">
      <div>배경</div>
      <div className="w-full flex justify-around">
        <button value="1" onClick={(e) => tabChanger(e)}>
          색상 배경
        </button>
        <button value="2" onClick={(e) => tabChanger(e)}>
          이미지 배경
        </button>
        <button value="3" onClick={(e) => tabChanger(e)}>
          직접 업로드
        </button>
      </div>
      {/* tab 구현 공간 */}
      {/* {tab === 1 && } */}
      {/* {tab === 1 && } */}
      {tab === "3" && <ImageUploader />}
    </div>
  );
}

export default BackgroundTool;
