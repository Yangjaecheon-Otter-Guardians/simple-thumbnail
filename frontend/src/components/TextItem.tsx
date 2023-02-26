import React from 'react';

import styles from 'styles/TextItem.module.css';
import PICKER from 'assets/color_picker.png';
import { BsCheck } from 'react-icons/bs';

type TextItemProps = {
  id: number;
  texts: string[];
  setTexts: React.Dispatch<React.SetStateAction<string[]>>;
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
};

const TextItem = ({ id, texts, setTexts, colors, setColors }: TextItemProps) => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={texts[id] || ''}
        onChange={(e) => {
          texts[id] = e.target.value ?? '';
          setTexts([...texts]);
        }}
        style={{ color: `var(${colors[id]})` }}
      />
      <div className={styles.buttonGroup}>
        {colorlist.map((item, index) => {
          const border = index === colorlist.length - 1 && colors[id] !== item ? '1px solid var(--grey-10)' : ``;
          return (
            <button
              key={index}
              className={colors[id] !== item ? styles.colorButton : styles.selectedColorButton}
              style={{
                backgroundColor: `var(${item})`,
                border: border,
              }}
              onClick={() => {
                colors[id] = item;
                setColors([...colors]);
              }}
            >
              <BsCheck style={{ color: index < 4 ? 'white' : 'black' }} />
            </button>
          );
        })}
        <button className={styles.colorButton}>
          <img src={PICKER} alt="컬러픽커" />
        </button>
      </div>
    </>
  );
};

export default TextItem;

const colorlist = ['--grey-100', '--grey-80', '--grey-60', '--grey-40', '--grey-20', '--grey-10', '--grey-00'];
