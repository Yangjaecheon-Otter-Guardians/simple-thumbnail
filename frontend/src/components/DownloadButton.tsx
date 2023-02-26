import { useCallback } from 'react';
import download from 'downloadjs';
import { toPng } from 'html-to-image';

interface Props {
  previewRef: React.RefObject<HTMLDivElement>;
}

function DownloadButton({ previewRef }: Props) {
  const handleClick = useCallback(async () => {
    if (previewRef.current) {
      download(await toPng(previewRef.current), 'thumbnail.png');
    }
  }, [previewRef?.current]);
  return (
    <button
      className="mt-4 mb-4 bg-primary-100 text-lighten text-md2 px-[20px] py-[10px] rounded-[100px] w-[335px]"
      onClick={handleClick}
    >
      이미지 다운로드
    </button>
  );
}

export default DownloadButton;
