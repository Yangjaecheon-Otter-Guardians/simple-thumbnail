import { previewFont } from 'atom';
import Dropdown from 'components/common/Dropdown';
import { FONT_LIST } from 'constants/fonts';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { textCountState, TEXT_WHITE } from 'atom/textAtom';
import { useState } from 'react';
import { RGBColor } from 'react-color';
import styles from 'styles/TextTool.module.css';
import { convertFontNameToValue } from 'utils/convertFontNameToValue';
import TextItem from '../components/TextItem';

function TextTool() {
  // text 갯수 선택
  // const [count, setCount] = useState(1);
  const [count, setCount] = useRecoilState(textCountState);

  const textCount = ['없음', '1개', '2개', '3개'];
  const setPreviewFont = useSetRecoilState(previewFont);

  const CountGroup = () => {
    return textCount.map((item, index) => {
      return (
        <button
          key={index}
          className={count !== index ? styles.countButton : styles.selectedCountButton}
          onClick={() => setCount(index)}
        >
          {item}
        </button>
      );
    });
  };
  // 레이아웃 정렬 형태 정보 동적 렌더
  const [layoutType, setLayoutType] = useState<string>('center');

  const LayoutGroup = () => {
    return (
      <div className={styles.layoutButtonGroup}>
        {getLayoutGroupList(count).map((item, index) => {
          return (
            <button
              key={index}
              className={`${layoutType !== item ? styles.commonStyle : styles.selectedStyle} ${layoutHandler(item)}`}
              onClick={() => setLayoutType(item)}
            >
              <p className={styles.greyBar} />
              {count > 1 && (
                <div>
                  <p className={styles.greyBar} />
                  {count > 2 && <p className={styles.greyBar} />}
                </div>
              )}
            </button>
          );
        })}
      </div>
    );
  };
  // text input 갯수 동적 렌더
  const [texts, setTexts] = useState<string[]>([]);
  const [colors, setColors] = useState<RGBColor[]>([TEXT_WHITE, TEXT_WHITE, TEXT_WHITE]);

  const TextItemGroup = () => {
    return [...Array(count)].map((_, index) => {
      return (
        <TextItem key={index} id={index} texts={texts} setTexts={setTexts} colors={colors} setColors={setColors} />
      );
    });
  };

  const changeFont = (selectedFont: string) => {
    const fontValue = convertFontNameToValue(selectedFont);
    setPreviewFont(fontValue);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>텍스트</h1>
      <h2 className={styles.subtitle}>텍스트 갯수</h2>
      <div className={styles.buttonGroup}>{CountGroup()}</div>
      {count != 0 && <h2 className={styles.subtitle}>텍스트 레이아웃</h2>}{' '}
      <div className={styles.layoutWrap}>{LayoutGroup()}</div>
      {count != 0 && <h2 className={styles.subtitle}>텍스트 내용</h2>}
      <Dropdown list={FONT_LIST.map((font, idx) => font.name)} handleChange={changeFont} />
      {TextItemGroup()}
    </div>
  );
}

export default TextTool;

export const layoutHandler = (type: string) => {
  switch (type) {
    case 'top-left':
      return styles.layoutTopLeft;
    case 'top':
      return styles.layoutTop;
    case 'top-right':
      return styles.layoutTopRight;
    case 'left':
      return styles.layoutLeft;
    case 'center':
      return styles.layoutCenter;
    case 'right':
      return styles.layoutRight;
    case 'bottom-left':
      return styles.layoutBottomLeft;
    case 'bottom':
      return styles.layoutBottom;
    case 'bottom-right':
      return styles.layoutBottomRight;
    case 'spacebetween-left':
      return styles.layoutSpaceBetweenLeft;
    case 'spacebetween-center':
      return styles.layoutSpaceBetweenCenter;
    case 'spacebetween-right':
      return styles.layoutSpaceBetweenRight;
    case 'title-author':
      return styles.layoutTitleAuthor;
  }
};

export const getLayoutGroupList = (count: number) => {
  switch (count) {
    case 0:
      return [];
    case 1:
      return ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right'];
    case 2:
      return [
        'top-left',
        'top',
        'top-right',
        'left',
        'center',
        'right',
        'bottom-left',
        'bottom',
        'bottom-right',
        'spacebetween-left',
        'spacebetween-center',
        'spacebetween-right',
      ];
    case 3:
      return ['left', 'center', 'bottom-left', 'title-author', 'spacebetween-center'];
    default:
      return [''];
  }
};
