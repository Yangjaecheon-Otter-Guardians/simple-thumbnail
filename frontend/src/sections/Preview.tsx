import TextPreview from 'components/TextPreview';
import { useEffect, useRef, useState } from 'react';
import { ratioAtom } from 'atom';
import { useRecoilValue } from 'recoil';

export default function Preview() {
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
            backgroundImage: `url(${DEMOPICTURE})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <TextPreview />
        </div>
      </div>
    </>
  );
}

const INITIALHEIGHT = { mobile: 188, table: 300 };

const DEMOPICTURE =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/00e7a483-4bef-4505-b81b-599c1955b0cc/1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230226T045054Z&X-Amz-Expires=86400&X-Amz-Signature=08e7eb2e267581bae7216db112629951ff332f4894e2f6597b290c9aef48e9af&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221.jpg%22&x-id=GetObject';
