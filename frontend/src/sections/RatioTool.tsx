import Arrow from "../assets/Arrow.svg";
import { ChangeEvent } from "react";
import { ratioAtom } from "atom";
import { useSetRecoilState } from "recoil";

export default function RatioTool() {
  const setPreviewRatio = useSetRecoilState(ratioAtom);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.value as keyof PreviewRatioOptionsType;
    setPreviewRatio(PREVIEWRATIOOPTIONS[key]);
  };

  return (
    <div className="w-full my-[10px]">
      <div className="mb-[10px] font-bold">레이아웃</div>
      <select
        className="w-full h-[44px] text-center rounded-[8px] appearance-none focus:outline-0"
        style={{ background: `url(${Arrow}) no-repeat right 24px center`, border: "1px solid #1B1B1C" }}
        onChange={handleSelectChange}
      >
        {Object.keys(PREVIEWRATIOOPTIONS).map((key) => (
          <option key={key} value={key}>
            {key} 썸네일
          </option>
        ))}
      </select>
    </div>
  );
}

interface PreviewRatioOptionsType {
  "1 : 1": number;
  "4 : 3": number;
  "16 : 9": number;
}

const PREVIEWRATIOOPTIONS: PreviewRatioOptionsType = {
  "1 : 1": 1,
  "4 : 3": 4 / 3,
  "16 : 9": 16 / 9,
};
