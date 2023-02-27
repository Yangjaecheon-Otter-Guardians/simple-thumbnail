import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { ChromePicker } from 'react-color';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isImageBright, previewColor, previewGradation } from 'atom';
import { useEffect } from 'react';

const singleColorArray = [
  [0, 'linear-gradient(180deg, #FF3737 0%, #FFDF37 100%)'],
  [1, 'linear-gradient(180deg, #FF9549 0%, #AF7EFF 100%)'],
  [2, 'linear-gradient(180deg, #FFE03C 0%, #3CFFA1 100%)'],
  [3, 'linear-gradient(180deg, #8BFF43 0%, #FF855F 100%)'],
  [4, 'linear-gradient(180deg, #7FE0FF 0%, #FFAD72 100%)'],
  [5, 'linear-gradient(180deg, #D4B9FF 0%, #8C45FF 100%)'],
  [6, 'linear-gradient(180deg, #FFFFFF 0%, #FFB6B6 100%)'],
];

export const ColorGradation = () => {
  const [currentGradation, setCurrentGradation] = useRecoilState(previewGradation);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPop, setIsPop] = useState(false);
  const setIsBright = useSetRecoilState(isImageBright);
  const setCurrentColor = useSetRecoilState(previewColor);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pickedColor = (e.target as HTMLInputElement).value;
    const pickedIndex = Number((e.target as HTMLInputElement).id);
    console.log(pickedIndex);
    setCurrentGradation(pickedColor);
    if (currentIndex !== pickedIndex) {
      setCurrentIndex(pickedIndex);
    }
  };
  const onChange = (color: string) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (currentIndex! >= 0) {
      setCurrentIndex(NaN);
    }
    setCurrentGradation(color);
  };
  const pop = () => {
    setIsPop((prev) => !prev);
  };

  useEffect(() => {
    setCurrentGradation('linear-gradient(180deg, #FF3737 0%, #FFDF37 100%');
    setCurrentColor('');
    setIsBright(true);
  }, []);
  return (
    <div className="flex justify-between">
      {singleColorArray.map((color, idx) => (
        <button
          id={String(color[0])}
          key={idx}
          value={color[1]}
          className={`flex justify-center items-center rounded border w-8 h-8 mr-2`}
          style={{ background: `${color[1]}` }}
          onClick={(e) => onClick(e)}
        >
          {currentIndex === idx && <BsCheck style={{ color: 'black' }} />}
        </button>
      ))}
      <button
        className="w-8 h-8 rounded"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, #FF5151 0deg, #FFF850 115.5deg, #50FFA1 218.62deg, #6950FF 360deg)',
        }}
        onClick={pop}
      ></button>
      {isPop && (
        <div className="absolute z-10">
          <ChromePicker color={currentGradation} onChange={(color) => onChange(color.hex)} />
        </div>
      )}
    </div>
  );
};

export default ColorGradation;
