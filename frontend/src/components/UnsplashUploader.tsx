import { useRecoilState, useSetRecoilState } from 'recoil';
import { isImageBright, previewColor, previewGradation, previewImage } from '../atom';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

const UnsplashUploader = () => {
  let timer: NodeJS.Timer | null = null;
  const setImageSrc = useSetRecoilState(previewImage);
  const [isBright, setIsBright] = useRecoilState(isImageBright);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setCurrentColor = useSetRecoilState(previewColor);
  const setCurrentGradation = useSetRecoilState(previewGradation);
  const mounted = useRef(false);
  const getRandomImage = async () => {
    if (!timer) {
      setImageSrc('https://source.unsplash.com/random/?time=' + new Date().getTime());
      setIsLoading(true);
      timer = setTimeout(function () {
        timer = null;
        setIsLoading(false);
      }, 1100);
    }
    if (mounted) {
      setCurrentColor('');
      setCurrentGradation('');
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
            'w-full h-12 border-input-border-default border-2 rounded-lg flex justify-center items-center'
          }
        >
          <div>Unsplash 랜덤 이미지 삽입</div>
          <div>
            <Icon
              className={'ml-2 w-6 h-6 ' + `${isLoading && `animate-spinner`}`}
              icon="tabler:refresh"
              vFlip={true}
            />
          </div>
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
