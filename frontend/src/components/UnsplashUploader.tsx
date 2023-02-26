import { useRecoilState, useSetRecoilState } from "recoil";
import { isImageBright, previewImage } from "../atom";
import { Icon } from "@iconify/react";

const images = async () => {
  const response = await fetch("https://api.unsplash.com/", {
    method: "GET",
    headers: {
      Authorization: process.env.UNSPLASH_ACCESS!,
    },
  });
};

const UnsplashUploader = () => {
  const setImageSrc = useSetRecoilState(previewImage);
  const [isBright, setIsBright] = useRecoilState(isImageBright);
  const insertImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line prefer-const
    let reader = new FileReader();

    if (e.target.files![0]) {
      reader.readAsDataURL(e.target.files![0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result as string;

      if (previewImgUrl) {
        setImageSrc(previewImgUrl);
      }
    };
  };
  const brigthControl = () => {
    setIsBright((prev) => !prev);
  };
  return (
    <label className="w-full h-12">
      <div className="w-full h-12 border-input-border-default border-2 rounded-lg flex justify-center items-center">
        <div>Unsplash 랜덤 이미지 삽입</div>
        <div>
          <Icon className="ml-2 w-6 h-6" icon="tabler:refresh" vFlip={true} />
        </div>
      </div>
      <input className="hidden" type="file" />
      <label className={`${isBright ? "text-darken" : "text-muted"} flex justify-start items-center`}>
        <input defaultChecked={!isBright} className="h-4 w-4" type="checkbox" onClick={brigthControl} />
        <span className="ml-[10px]">배경 어둡게</span>
      </label>
    </label>
  );
};

export default UnsplashUploader;
