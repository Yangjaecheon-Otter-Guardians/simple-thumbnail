import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { isImageBright, previewColor, previewGradation } from 'atom';
import { useEffect } from 'react';
import { Icon } from '@iconify/react';

interface IGradationData {
  index: string;
  gradient: string;
  label: string;
}

const singleColorArray: IGradationData[] = [
  { index: '0', gradient: 'linear-gradient(134.01deg, #FFD9D9 9.35%, #FF2B2B 100%)', label: '빨강-핑크-그라데이션' },
  { index: '1', gradient: 'linear-gradient(135deg, #87FAA9 0.01%, #BB86DD 100%)', label: '초록-보라-그라데이션' },
  { index: '2', gradient: 'linear-gradient(137.82deg, #F8E92D 4.46%, #33E6F8 100%)', label: '노랑-하늘-그라데이션' },
  { index: '3', gradient: 'linear-gradient(132.18deg, #FC941F 0%, #7836F8 95.54%)', label: '주황-보라-그라데이션' },
  { index: '4', gradient: 'linear-gradient(135deg, #7EFBFE 0%, #2C2EDE 100%)', label: '하늘-파랑-그라데이션' },
  { index: '5', gradient: 'linear-gradient(135deg, #FF79D1 0%, #FFCE33 100%)', label: '핑크-노랑-그라데이션' },
  { index: '6', gradient: 'linear-gradient(135deg, #3FFA4B 0%, #453EF7 100%)', label: '초록-파랑-그라데이션' },
];

export const ColorGradation = () => {
  const setCurrentGradation = useSetRecoilState(previewGradation);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const setIsBright = useSetRecoilState(isImageBright);
  const setCurrentColor = useSetRecoilState(previewColor);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pickedColor = (e.target as HTMLInputElement).value;
    const pickedIndex = Number((e.target as HTMLInputElement).id);
    setCurrentGradation(pickedColor);
    if (currentIndex !== pickedIndex) {
      setCurrentIndex(pickedIndex);
    }
  };

  const hexString = '0123456789abcdef';
  const randomColor = () => {
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  };
  const generateRandom = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (currentIndex! >= 0) {
      setCurrentIndex(NaN);
    }
    const colorOne = randomColor();
    const colorTwo = randomColor();
    const angle = Math.floor(Math.random() * 360);
    setCurrentGradation(`linear-gradient(${angle}deg, ${colorOne} 0%, ${colorTwo} 100%)`);
  };

  useEffect(() => {
    setCurrentGradation('linear-gradient(180deg, #FF3737 0%, #FFDF37 100%');
    setCurrentColor('');
    setIsBright(true);
  }, []);
  return (
    <div className="flex justify-between tablet:justify-start " style={{ gap: '12px' }}>
      {singleColorArray.map((color, idx) => (
        <button
          type="button"
          id={color.index}
          key={color.index}
          value={color.gradient}
          className="flex justify-center items-center rounded border w-8 h-8 tablet:w-[48px] tablet:h-[48px]"
          style={{ background: `${color.gradient}` }}
          onClick={onClick}
          aria-label={color.label}
        >
          {currentIndex === idx && <BsCheck className={'tablet:text-[32px]'} style={{ color: 'black' }} />}
        </button>
      ))}
      <button
        type="button"
        className="w-8 h-8 rounded border-2 flex justify-center items-center  tablet:w-[48px] tablet:h-[48px]"
        onClick={generateRandom}
        aria-label="랜덤-그라데이션"
      >
        <Icon icon="vaadin:random" vFlip={true} />
      </button>
    </div>
  );
};

export default ColorGradation;
