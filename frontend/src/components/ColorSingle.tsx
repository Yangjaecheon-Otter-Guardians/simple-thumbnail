import { isImageBright, previewColor, previewGradation } from 'atom';
import { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import { BsCheck } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface ISingleColorData {
  index: string;
  color: string;
  tailwind: string;
  label: string;
}

const singleColorArray: ISingleColorData[] = [
  { index: '0', color: '#ff3737', tailwind: 'bg-backRed', label: '빨강' },
  { index: '1', color: '#ff9549', tailwind: 'bg-backOrange', label: '주황' },
  { index: '2', color: '#ffe03c', tailwind: 'bg-backYellow', label: '노랑' },
  { index: '3', color: '#4fcf00', tailwind: 'bg-backGreen', label: '초록' },
  { index: '4', color: '#30cdff', tailwind: 'bg-backBlue', label: '하늘' },
  { index: '5', color: '#0E0E0E', tailwind: 'bg-primary-100', label: '검정' },
  { index: '6', color: '#ffffff', tailwind: 'bg-bakcWhite', label: '하양' },
];

const ColorSingle = () => {
  const [currentColor, setCurrentColor] = useRecoilState(previewColor);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPop, setIsPop] = useState(false);
  const [isPicker, setIsPicker] = useState(false);
  const setIsBright = useSetRecoilState(isImageBright);
  const setCurrentGradation = useSetRecoilState(previewGradation);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pickedColor = (e.target as HTMLInputElement).value;
    const pickedIndex = Number((e.target as HTMLInputElement).id);
    setCurrentColor(pickedColor);
    if (isPop) {
      setIsPop((prev) => !prev);
    }
    if (currentIndex !== pickedIndex) {
      setCurrentIndex(pickedIndex);
    }
    if (isPicker) {
      setIsPicker(false);
    }
  };
  const onChange = (color: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (currentIndex >= 0) {
      setCurrentIndex(NaN);
    }
    setCurrentColor(color);
    setIsPicker(true);
  };
  const pop = () => {
    setIsPop((prev) => !prev);
    setCurrentIndex(NaN);
  };

  useEffect(() => {
    setCurrentGradation('');
    setCurrentColor('#ff3737');
    setIsBright(true);
  }, []);
  // useEffect(() => {
  //   function handleTitleClick() {
  //     setIsPop((prev) => !prev);
  //   }
  //   if (isPop) {
  //     const prompt = document.getElementById('notMove');
  //     prompt.style.overflow = 'hidden';
  //     document.body.style.overflow = 'hidden';
  //     const prompt2 = document.body;
  //     prompt2.addEventListener('click', handleTitleClick);
  //     // document.body.onclick(setIsPop((prev) => !prev));
  //   }
  // }, [isPop]);
  return (
    <div className="flex justify-between tablet:justify-start relative" style={{ gap: '12px' }}>
      {singleColorArray.map((color, idx) => (
        <button
          type="button"
          id={color.index}
          key={color.index}
          value={color.color}
          className={`flex justify-center items-center rounded border w-8 h-8 tablet:w-[48px] tablet:h-[48px] ${
            color.tailwind
          } ${String(currentIndex) === color.index && 'border'}`}
          onClick={(e) => onClick(e)}
          aria-label={color.label}
        >
          {currentIndex === idx && (
            <BsCheck className={'tablet:text-[32px]'} style={{ color: idx === 5 ? 'white' : 'black' }} />
          )}
        </button>
      ))}
      {!isPop && (
        <button
          type="button"
          className="w-8 h-8 rounded flex justify-center items-center tablet:w-[48px] tablet:h-[48px]"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, #FF5151 0deg, #FFF850 115.5deg, #50FFA1 218.62deg, #6950FF 360deg)',
          }}
          onClick={pop}
          aria-label="컬러픽커"
        >
          {Number.isNaN(currentIndex) && <BsCheck className={'tablet:text-[32px]'} style={{ color: 'black' }} />}
        </button>
      )}
      {isPop && (
        <div>
          <button
            type="button"
            className="w-8 h-8 rounded border flex justify-center items-center tablet:w-[48px] tablet:h-[48px]"
            style={{
              background: 'white',
            }}
            onClick={pop}
          >
            <IoMdClose className={'tablet:text-[32px]'} style={{ color: 'black' }} />
          </button>
          <div className="absolute z-10 right-12 ">
            <ChromePicker color={currentColor} onChange={(color) => onChange(color.hex)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSingle;
