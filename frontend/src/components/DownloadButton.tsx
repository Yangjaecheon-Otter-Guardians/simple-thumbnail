import { useCallback, useState } from 'react';
import download from 'downloadjs';
import { toPng } from 'html-to-image';
import Loading from './Loading';

interface Props {
  previewRef: React.RefObject<HTMLDivElement>;
}

function DownloadButton({ previewRef }: Props) {
  const [isLoad, setIsLoad] = useState(false);
  const handleClick = useCallback(async () => {
    if (previewRef.current) {
      setIsLoad(true);
      download(await toPng(previewRef.current), 'thumbnail.png');
      setIsLoad(false);
    }
  }, [previewRef?.current]);
  return (
    <>
      <button
        className="bg-primary-100 text-lighten text-md2 px-[20px] py-[10px] rounded-[100px] w-full flex flex-row justify-center gap-[5px] items-center mt-24 mb-16"
        onClick={handleClick}
      >
        {isLoad ? <Loading /> : null}
        이미지 다운로드
      </button>
    </>
  );
}

export default DownloadButton;
