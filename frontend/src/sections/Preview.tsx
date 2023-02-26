import { ChangeEvent, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { previewImage } from "../atom";

export default function Preview() {
  const imageSrc = useRecoilValue(previewImage);
  const preview = useRef<HTMLDivElement>(null);
  const previewRatio = useRef(PREVIEWRATIOOPTIONS[INITIALRATIO]);
  const [previewWidth, setPreviewWidth] = useState<number>(
    window.innerWidth >= 764 ? INITIALHEIGHT.table : INITIALHEIGHT.mobile,
  );

  const calculatePreviewWidth = (ratio: number) => {
    if (preview && preview.current) {
      return preview.current.clientHeight * ratio;
    }
    return previewWidth;
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.value as keyof PreviewRatioOptionsType;
    previewRatio.current = PREVIEWRATIOOPTIONS[key];
    setPreviewWidth(calculatePreviewWidth(previewRatio.current));
  };

  return (
    <>
      <div className="w-full h-[188px] tablet:h-[300px] flex justify-center items-center">
        <div
          ref={preview}
          style={{
            width: `${previewWidth}px`,
            height: "100%",
            backgroundImage: `url(${DEMOPICTURE})`,
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="w-full my-[10px]">
        <div className="mb-[10px] font-bold">레이아웃</div>
        <select
          className="w-full h-[44px] text-center rounded-[8px] appearance-none focus:outline-0"
          style={{ background: `url(${ARROW}) no-repeat right 24px center`, border: "1px solid #1B1B1C" }}
          onChange={handleSelectChange}
        >
          {Object.keys(PREVIEWRATIOOPTIONS).map((key) => (
            <option key={key} value={key}>
              {key} 썸네일
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

interface PreviewRatioOptionsType {
  "1 : 1": number;
  "4 : 3": number;
  "16 : 9": number;
}

const INITIALRATIO = "1 : 1";
const INITIALHEIGHT = { mobile: 188, table: 300 };
const PREVIEWRATIOOPTIONS: PreviewRatioOptionsType = {
  "1 : 1": 1,
  "4 : 3": 4 / 3,
  "16 : 9": 16 / 9,
};

const DEMOPICTURE =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/00e7a483-4bef-4505-b81b-599c1955b0cc/1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230226T045054Z&X-Amz-Expires=86400&X-Amz-Signature=08e7eb2e267581bae7216db112629951ff332f4894e2f6597b290c9aef48e9af&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221.jpg%22&x-id=GetObject";

const ARROW =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/187b79b9-e5ca-494e-9d75-fe8722eaa6f7/Vector.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230225T172543Z&X-Amz-Expires=86400&X-Amz-Signature=158198f4f90d7b0ceea159a194abadcff38c23849c6fbff3f999d3eb7af18524&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Vector.svg%22&x-id=GetObject";
