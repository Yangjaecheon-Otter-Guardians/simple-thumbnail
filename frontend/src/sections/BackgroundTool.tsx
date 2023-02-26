import ColorUploader from 'components/ColorUploader';
import UnsplashUploader from 'components/UnsplashUploader';
import { useState } from 'react';
import ImageUploader from '../components/ImageUploader';

function BackgroundTool() {
  const [tab, setTab] = useState('1');
  const tabChanger = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const currentTab = (e.target as HTMLInputElement).value;
    setTab(currentTab);
  };
  return (
    <div className="w-full border-solid border-2 border-indigo-600">
      <div>배경</div>
      <div className="w-full flex justify-between">
        <button
          className={`w-[106px] h-[36px] rounded-[50px] ${tab === '1' ? 'bg-primary-100' : 'bg-on-surface'} ${
            tab === '1' ? 'text-lighten' : 'text-darken'
          }`}
          value="1"
          onClick={(e) => tabChanger(e)}
        >
          색상 배경
        </button>
        <button
          className={`w-[106px] h-[36px] rounded-[50px] ${tab === '2' ? 'bg-primary-100' : 'bg-on-surface'} ${
            tab === '2' ? 'text-lighten' : 'text-darken'
          }`}
          value="2"
          onClick={(e) => tabChanger(e)}
        >
          이미지 배경
        </button>
        <button
          className={`font-SUIT w-[106px] h-[36px] rounded-[50px] ${tab === '3' ? 'bg-primary-100' : 'bg-on-surface'} ${
            tab === '3' ? 'text-lighten' : 'text-darken'
          }`}
          value="3"
          onClick={(e) => tabChanger(e)}
        >
          직접 업로드
        </button>
      </div>
      <div className="py-3">
        {/* tab 구현 공간 */}
        {tab === '1' && <ColorUploader />}
        {tab === '2' && <UnsplashUploader />}
        {tab === '3' && <ImageUploader />}
      </div>
    </div>
  );
}

export default BackgroundTool;
