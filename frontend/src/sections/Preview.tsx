import TextPreview from 'components/TextPreview';
import { useEffect, useRef, useState } from 'react';
import { ratioAtom, previewImage, isImageBright, previewColor, previewGradation, colorUploaderTab } from 'atom';
import { useRecoilValue } from 'recoil';
import { previewFont } from 'atom';
interface Props {
  previewRef: React.RefObject<HTMLDivElement>;
}

export default function Preview({ previewRef }: Props) {
  const imageSrc = useRecoilValue(previewImage);
  const isBright = useRecoilValue(isImageBright);
  const currentColor = useRecoilValue(previewColor);
  const currentGradation = useRecoilValue(previewGradation);
  const tab = useRecoilValue(colorUploaderTab);
  const preview = useRef<HTMLDivElement>(null);
  const previewRatio = useRecoilValue(ratioAtom);
  const font = useRecoilValue(previewFont);
  const [previewWidth, setPreviewWidth] = useState<number>(
    window.innerWidth >= 764 ? INITIALHEIGHT.table : INITIALHEIGHT.mobile,
  );

  useEffect(() => {
    if (preview && preview.current) {
      setPreviewWidth(preview.current.clientHeight * previewRatio);
    }
  }, [previewRatio]);
  return (
    <>
      <div
        className="w-full border-b-2"
        style={{
          width: '100%',
          height: '100%',
          position: 'sticky',
          background: 'white',
          top: '48px',
          zIndex: 97,
          padding: '16px 0 0 0',
        }}
      >
        <div className="w-full h-[200px] tablet:h-[320px] flex justify-center items-center" ref={previewRef}>
          <div
            ref={preview}
            style={{
              width: `${previewWidth}px`,
              height: '100%',
              // background: `${currentGradation}`,
              backgroundColor: `${currentColor}`,
              backgroundImage: tab === '1' ? `url(${imageSrc})` : `${currentGradation}`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: '5px',
            }}
          >
            <TextPreview />
            <div
              style={{
                position: 'relative',
                bottom: '100%',
                zIndex: 97,
                width: `${previewWidth}px`,
                height: '100%',
                background: `${isBright ? 'transparent' : 'rgba(0, 0, 0, 0.3)'}`,
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '16px',
            background: 'white',
          }}
        ></div>
      </div>
    </>
  );
}

const INITIALHEIGHT = { mobile: 188, table: 300 };
