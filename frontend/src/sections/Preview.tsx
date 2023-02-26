import TextPreview from 'components/TextPreview';
import { useEffect, useRef, useState } from 'react';
import { ratioAtom, previewImage, isImageBright, previewColor } from 'atom';
import { useRecoilValue } from 'recoil';

export default function Preview() {
  const imageSrc = useRecoilValue(previewImage);
  const isBright = useRecoilValue(isImageBright);
  const currentColor = useRecoilValue(previewColor);
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
      <div className="w-full h-[188px] tablet:h-[300px] flex justify-center items-center">
        <div
          ref={preview}
          style={{
            width: `${previewWidth}px`,
            height: '100%',
            backgroundColor: `${currentColor}`,
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
