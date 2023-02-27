import { useRecoilState, useSetRecoilState } from 'recoil';
import { isImageBright, previewImage } from '../atom';
import { Icon } from '@iconify/react';

const ImageUploader = () => {
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
    <div className="md:w-full h-fit">
      <label className="cursor-pointer">
        <div className="w-full gap-2  h-12 border-input-border-default border-2 rounded-lg flex justify-center items-center md:cursor-pointer">
          <Icon className=" w-6 h-6" icon="ph:upload-simple" />
          <div>이미지 업로드</div>
        </div>
        <input className="hidden" type="file" onChange={(e) => insertImage(e)} />
      </label>
      <label className={`${isBright ? 'text-darken' : 'text-muted'} flex justify-start items-center mt-3`}>
        <input defaultChecked={!isBright} className="h-4 w-4" type="checkbox" onClick={brigthControl} />
        <span className="ml-[10px]">배경 어둡게</span>
      </label>
    </div>
  );
};

export default ImageUploader;
