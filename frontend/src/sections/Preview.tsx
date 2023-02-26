import { useRecoilValue } from "recoil";
import { previewImage } from "../atom";

function Preview() {
  const imageSrc = useRecoilValue(previewImage);
  return (
    <div className="w-full border-solid border-2 border-indigo-600">
      <span>Preview</span>
      <div className="h-[178px]">
        <img className="h-full" src={imageSrc} />
      </div>
    </div>
  );
}

export default Preview;
