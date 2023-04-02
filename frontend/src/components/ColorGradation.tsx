import { BsCheck } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { previewGradation } from 'atom';
import { Icon } from '@iconify/react';

export const gradationColorArray = [
  { color: 'linear-gradient(134.01deg, #FFD9D9 9.35%, #FF2B2B 100%)', label: '빨강-핑크-그라데이션' },
  { color: 'linear-gradient(135deg, #87FAA9 0.01%, #BB86DD 100%)', label: '초록-보라-그라데이션' },
  { color: 'linear-gradient(137.82deg, #F8E92D 4.46%, #33E6F8 100%)', label: '노랑-하늘-그라데이션' },
  { color: 'linear-gradient(132.18deg, #FC941F 0%, #7836F8 95.54%)', label: '주황-보라-그라데이션' },
  { color: 'linear-gradient(135deg, #7EFBFE 0%, #2C2EDE 100%)', label: '하늘-파랑-그라데이션' },
  { color: 'linear-gradient(135deg, #FF79D1 0%, #FFCE33 100%)', label: '핑크-노랑-그라데이션' },
  { color: 'linear-gradient(135deg, #3FFA4B 0%, #453EF7 100%)', label: '초록-파랑-그라데이션' },
];

export const ColorGradation = () => {
  const [currentGradation, setCurrentGradation] = useRecoilState(previewGradation);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentGradation({ color: (e.target as HTMLInputElement).value, isRandom: false });
  };

  const randomColor = () => {
    const hexString = '0123456789abcdef';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  };
  const generateRandom = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const colorOne = randomColor();
    const colorTwo = randomColor();
    const angle = Math.floor(Math.random() * 360);
    setCurrentGradation({ color: `linear-gradient(${angle}deg, ${colorOne} 0%, ${colorTwo} 100%)`, isRandom: true });
  };

  return (
    <div className="flex justify-between tablet:justify-start " style={{ gap: '12px' }}>
      {gradationColorArray.map((gradation) => (
        <button
          key={gradation.color}
          value={gradation.color}
          className={`flex justify-center items-center rounded border w-8 h-8 tablet:w-[48px] tablet:h-[48px]`}
          style={{ background: `${gradation.color}` }}
          onClick={(e) => onClick(e)}
          aria-label={gradation.label}
        >
          {currentGradation.color === gradation.color && !currentGradation.isRandom && (
            <BsCheck className={'tablet:text-[32px]'} style={{ color: 'black' }} />
          )}
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
