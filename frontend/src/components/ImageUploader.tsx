import { useSetRecoilState } from "recoil";
import { previewImage } from "../atom";

const ImageUploader = () => {
  const setImageSrc = useSetRecoilState(previewImage);
  const insertImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return <input type="file" onChange={(e) => insertImage(e)} />;
};

export default ImageUploader;
