import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useRecoilState } from 'recoil';
import { previewColor } from 'atom';
import { IoMdClose } from 'react-icons/io';
import { BsCheck } from 'react-icons/bs';

type color = {
  hex: string;
  name: string;
};

export const singleColorArray: color[] = [
  { hex: '#ff3737', name: 'bg-backRed' },
  { hex: '#ff9549', name: 'bg-backOrange' },
  { hex: '#ffe03c', name: 'bg-backYellow' },
  { hex: '#4fcf00', name: 'bg-backGreen' },
  { hex: '#30cdff', name: 'bg-backBlue' },
  { hex: '#0E0E0E', name: 'bg-primary-100' },
  { hex: '#ffffff', name: 'bg-bakcWhite' },
];

const ColorSingle = () => {
  const [currentColor, setCurrentColor] = useRecoilState(previewColor);
  const [isPop, setIsPop] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pickedColor = (e.target as HTMLInputElement).value;
    setCurrentColor({ color: pickedColor, isPicker: false });
    if (isPop) {
      setIsPop((prev) => !prev);
    }
  };
  const onChange = (color: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setCurrentColor({ color: color, isPicker: true });
  };
  const pop = () => {
    setIsPop((prev) => !prev);
  };

  return (
    <div className="flex justify-between tablet:justify-start relative" style={{ gap: '12px' }}>
      {singleColorArray.map((color, idx) => (
        <button
          id={String(idx)}
          key={idx}
          value={color.hex}
          onClick={(e) => onClick(e)}
          className={`flex justify-center items-center rounded border w-8 h-8 tablet:w-[48px] tablet:h-[48px] ${
            color.name
          } ${currentColor.color === color.hex && 'border'}`}
        >
          {currentColor.color === color.hex && (
            <BsCheck className={'tablet:text-[32px]'} style={{ color: idx === 5 ? 'white' : 'black' }} />
          )}
        </button>
      ))}
      {isPop ? (
        <div>
          <button
            className="w-8 h-8 rounded border flex justify-center items-center tablet:w-[48px] tablet:h-[48px] bg-white"
            onClick={pop}
          >
            <IoMdClose className={'tablet:text-[32px]'} style={{ color: 'black' }} />
          </button>
          <div className="absolute z-10 right-12 ">
            <ChromePicker color={currentColor.color} onChange={(color) => onChange(color.hex)} />
          </div>
        </div>
      ) : (
        <button
          className="w-8 h-8 rounded flex justify-center items-center tablet:w-[48px] tablet:h-[48px]"
          onClick={pop}
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, #FF5151 0deg, #FFF850 115.5deg, #50FFA1 218.62deg, #6950FF 360deg)',
          }}
        >
          {currentColor.isPicker && <BsCheck className={'tablet:text-[32px]'} style={{ color: 'black' }} />}
        </button>
      )}
    </div>
  );
};

export default ColorSingle;
