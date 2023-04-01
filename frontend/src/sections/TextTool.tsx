import { previewFont } from 'atom';
import { textCountState, TEXT_WHITE } from 'atom/textAtom';
import Dropdown from 'components/common/Dropdown';
import TextLayoutGroup from 'components/text/TextLayoutGroup';
import { FONT_LIST, FONT_LIST_TO_TAILWIND } from 'constants/fonts';
import { useState } from 'react';
import { RGBColor } from 'react-color';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from 'styles/TextTool.module.css';
import { convertFontNameToValue } from 'utils/convertFontNameToValue';
import TextItem from '../components/text/TextItem';

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
          type="button"
          key={index}
          className={count !== index ? styles.countButton : styles.selectedCountButton}
          onClick={() => setCount(index)}
        >
          {item}
        </button>
      );
    });
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
      {count !== 0 && (
        <>
          <h2 className={styles.subtitle}>텍스트 레이아웃</h2>
          <div className={styles.layoutWrap}>
            <TextLayoutGroup />
          </div>
          <h2 className={styles.subtitle}>텍스트 내용</h2>
          <Dropdown
            list={FONT_LIST.map((font) => font.name)}
            handleChange={changeFont}
            styleList={FONT_LIST_TO_TAILWIND}
          />
          {TextItemGroup()}
        </>
      )}
    </div>
  );
}

export default TextTool;
