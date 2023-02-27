import { useRecoilState, useSetRecoilState } from 'recoil';
import { colorUploaderTab, isImageBright, previewColor, previewGradation, previewImage } from '../atom';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

const UnsplashUploader = () => {
  let timer: NodeJS.Timer | null = null;
  const setImageSrc = useSetRecoilState(previewImage);
  const [isBright, setIsBright] = useRecoilState(isImageBright);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setCurrentColor = useSetRecoilState(previewColor);
  const setCurrentGradation = useSetRecoilState(previewGradation);
  const setTab = useSetRecoilState(colorUploaderTab);
  const mounted = useRef(false);
  const getRandomImage = async () => {
    if (!timer) {
      const response = await fetch('https://source.unsplash.com/random');
      setImageSrc(response.url);

      setIsLoading(true);
      timer = setTimeout(function () {
        timer = null;
        setImageSrc('https://source.unsplash.com/random/?time=' + new Date().getTime());
        setIsLoading(false);
      }, 1100);
    }
    if (mounted) {
      setCurrentColor('');
      setCurrentGradation('');
      setTab('1');
    }
  };
  const brigthControl = () => {
    setIsBright((prev) => !prev);
  };
  useEffect(() => {
    mounted.current = true;
  }, []);
  return (
    <div className="w-full h-fit">
      <button className="cursor-pointer w-full" onClick={() => getRandomImage()}>
        <div
          className={
            `${isLoading && 'bg-on-surface '}` +
            'w-full h-12 border-input-border-default gap-2 border-2 rounded-lg flex justify-center items-center'
          }
        >
          <Icon className={'w-6 h-6 ' + `${isLoading && `animate-spinner`}`} icon="tabler:refresh" vFlip={true} />
          <div className="text-sm">Unsplash 랜덤 이미지 삽입</div>
        </div>
      </button>
      <label className={`${isBright ? 'text-darken' : 'text-muted'} flex justify-start items-center mt-3`}>
        <input defaultChecked={!isBright} className="h-4 w-4" type="checkbox" onClick={brigthControl} />
        <span className="ml-[10px]">배경 어둡게</span>
      </label>
    </div>
  );
};

export default UnsplashUploader;
