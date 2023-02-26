import { textCountState, TEXT_WHITE } from 'atom/textAtom';
import { useState } from 'react';
import { RGBColor } from 'react-color';
import { useRecoilState } from 'recoil';
import styles from 'styles/TextTool.module.css';
import TextItem from '../components/TextItem';

export const layoutHandler = (type: string) => {
  switch (type) {
    case 'top':
      return styles.layoutTop;
    case 'center':
      return styles.layoutCenter;
    case 'bottom':
      return styles.layoutBottom;
  }
};

function TextTool() {
  // text 갯수 선택
  // const [count, setCount] = useState(1);
  const [count, setCount] = useRecoilState(textCountState);

  const textCount = ['없음', '1개', '2개', '3개'];

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
    return ['top', 'center', 'bottom'].map((item, index) => {
      return (
        <button
          key={index}
          className={`${layoutType !== item ? styles.commonStyle : styles.selectedStyle} ${layoutHandler(item)}`}
          onClick={() => setLayoutType(item)}
        >
          {[...Array(count)].map((_, index) => (
            <p key={index}>{texts[index] ? texts[index].substring(0, 5) : '텍스트'}</p>
          ))}
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>텍스트</h1>
      <h2 className={styles.subtitle}>텍스트 갯수</h2>
      <div className={styles.buttonGroup}>{CountGroup()}</div>
      <h2 className={styles.subtitle}>텍스트 레이아웃</h2>
      <div className={styles.buttonGroup}>{LayoutGroup()}</div>
      {count != 0 && <h2 className={styles.subtitle}>텍스트</h2>}
      {TextItemGroup()}
    </div>
  );
}

export default TextTool;
