import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { ChromePicker } from 'react-color';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isImageBright, previewColor } from 'atom';
import { useEffect } from 'react';

const singleColorArray = [
  [0, '#ff3737', 'bg-backRed'],
  [1, '#ff9549', 'bg-backOrange'],
  [2, '#ffe03c', 'bg-backYellow'],
  [3, '#4fcf00', 'bg-backGreen'],
  [4, '#30cdff', 'bg-backBlue'],
  [5, '#a873ff', 'bg-backPurple'],
  [6, '#ffffff', 'bg-bakcWhite'],
];

export const ColorSingle = () => {
  const [currentColor, setCurrentColor] = useRecoilState(previewColor);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPop, setIsPop] = useState(false);
  const setIsBright = useSetRecoilState(isImageBright);
  console.log(currentColor);
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pickedColor = (e.target as HTMLInputElement).value;
    const pickedIndex = Number((e.target as HTMLInputElement).id);
    console.log(pickedIndex);
    setCurrentColor(pickedColor);
    if (currentIndex !== pickedIndex) {
      setCurrentIndex(pickedIndex);
    }
  };
  const onChange = (color: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (currentIndex! >= 0) {
      setCurrentIndex(NaN);
    }
    setCurrentColor(color);
  };
  const pop = () => {
    setIsPop((prev) => !prev);
  };

  useEffect(() => {
    setCurrentColor('#ff3737');
    setIsBright(true);
  }, []);
  return (
    <div className="flex">
      {singleColorArray.map((color, idx) => (
        <button
          id={String(color[0])}
          key={idx}
          value={color[1]}
          className={`flex justify-center items-center rounded border w-6 h-6 ${color[2]} mr-2 ${
            currentIndex === color[0] && 'border'
          }`}
          onClick={(e) => onClick(e)}
        >
          {currentIndex === idx && <BsCheck style={{ color: 'black' }} />}
        </button>
      ))}
      <button className="w-6 h-6 rounded bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400" onClick={pop}></button>
      {isPop && (
        <div className="absolute z-10">
          <ChromePicker color={currentColor} onChange={(color) => onChange(color.hex)} />
        </div>
      )}
    </div>
  );
};

export default ColorSingle;
