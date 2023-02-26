import TextPreview from 'components/TextPreview';
import { useEffect, useRef, useState } from 'react';
import { ratioAtom, previewImage, isImageBright } from 'atom';
import { useRecoilValue } from 'recoil';

interface Props {
  previewRef: React.RefObject<HTMLDivElement>;
}

export default function Preview({ previewRef }: Props) {
  const imageSrc = useRecoilValue(previewImage);
  const isBright = useRecoilValue(isImageBright);
  const preview = useRef<HTMLDivElement>(null);
  const previewRatio = useRecoilValue(ratioAtom);
  const [previewWidth, setPreviewWidth] = useState<number>(
    window.innerWidth >= 764 ? INITIALHEIGHT.table : INITIALHEIGHT.mobile,
  );

  useEffect(() => {
    if (preview && preview.current) {
      setPreviewWidth(preview.current.clientHeight * previewRatio);
    } else {
      setPreviewWidth(previewWidth);
    }
  }, [previewRatio]);

  return (
    <>
      <div className="w-full h-[188px] tablet:h-[300px] flex justify-center items-center" ref={previewRef}>
        <div
          ref={preview}
          style={{
            width: `${previewWidth}px`,
            height: '100%',
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: `${isBright ? 'brightness(100%)' : 'brightness(70%)'}`,
          }}
        >
          <TextPreview />
        </div>
      </div>
    </>
  );
}

const INITIALHEIGHT = { mobile: 188, table: 300 };
