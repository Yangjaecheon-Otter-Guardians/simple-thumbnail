import { isImageBright, previewColor, previewGradation } from 'atom';
import { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import { BsCheck } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useRecoilState, useSetRecoilState } from 'recoil';

const singleColorArray = [
  [0, '#ff3737', 'bg-backRed'],
  [1, '#ff9549', 'bg-backOrange'],
  [2, '#ffe03c', 'bg-backYellow'],
  [3, '#4fcf00', 'bg-backGreen'],
  [4, '#30cdff', 'bg-backBlue'],
  [5, '#0E0E0E', 'bg-primary-100'],
  [6, '#ffffff', 'bg-bakcWhite'],
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
    <div className="flex justify-between relative">
      {singleColorArray.map((color, idx) => (
        <button
          id={String(color[0])}
          key={idx}
          value={color[1]}
          className={`flex justify-center items-center rounded border w-8 h-8 tablet:w-[48px] tablet:h-[48px] ${
            color[2]
          } mr-2 ${currentIndex === color[0] && 'border'}`}
          onClick={(e) => onClick(e)}
        >
          {currentIndex === idx && (
            <BsCheck className={'tablet:text-[32px]'} style={{ color: idx === 5 ? 'white' : 'black' }} />
          )}
        </button>
      ))}
      {!isPop && (
        <button
          className="w-8 h-8 rounded flex justify-center items-center tablet:w-[48px] tablet:h-[48px]"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, #FF5151 0deg, #FFF850 115.5deg, #50FFA1 218.62deg, #6950FF 360deg)',
          }}
          onClick={pop}
        >
          {Number.isNaN(currentIndex) && <BsCheck className={'tablet:text-[32px]'} style={{ color: 'black' }} />}
        </button>
      )}
      {isPop && (
        <div>
          <button
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
