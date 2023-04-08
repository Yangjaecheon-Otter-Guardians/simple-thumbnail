import { Icon } from '@iconify/react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isImageBright, previewImage } from '../atom';
import heic2any from 'heic2any';

const ImageUploader = () => {
  const setImageSrc = useSetRecoilState(previewImage);
  const [isBright, setIsBright] = useRecoilState(isImageBright);
  const insertImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target?.files?.[0] as File;
    if (file.name.split('.')[1] === 'heic') {
      const blob = file;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      heic2any({ blob: blob, toType: 'image/jpeg' }).then(function (resultBlob: any) {
        const newFile = new File([resultBlob], file.name.split('.')[0] + '.jpg', {
          type: 'image/jpeg',
          lastModified: new Date().getTime(),
        });
        reader.readAsDataURL(newFile);
      });
    } else {
      if (e.target?.files?.[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
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
        <div className="w-full gap-2 h-12 border-input-border-default border-2 rounded-lg flex justify-center items-center md:cursor-pointer">
          <Icon className=" w-6 h-6" icon="ph:upload-simple" />
          <div className="text-sm">이미지 업로드</div>
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
