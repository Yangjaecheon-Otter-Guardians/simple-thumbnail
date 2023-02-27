import React, { useState } from 'react';

import PICKER from 'assets/color_picker.png';
import {
  getRGB,
  textsAll,
  TextSizeType,
  TextType,
  TEXT_BLACK,
  TEXT_LG,
  TEXT_MD,
  TEXT_SM,
  TEXT_WHITE,
} from 'atom/textAtom';
import { ChromePicker, RGBColor } from 'react-color';
import { useRecoilState } from 'recoil';

import { previewFont } from 'atom';
import { BsCheck } from 'react-icons/bs';
import { FaFont } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import styles from 'styles/TextItem.module.css';
import Dropdown from '../common/Dropdown';

type TextItemProps = {
  id: number;
  texts: string[];
  setTexts: React.Dispatch<React.SetStateAction<string[]>>;
  colors: RGBColor[];
  setColors: React.Dispatch<React.SetStateAction<RGBColor[]>>;
};

const TextItem = ({ id, texts, setTexts, colors, setColors }: TextItemProps) => {
  const [contents, setContents] = useRecoilState(textsAll(id));
  const [placeholder] = useState(contents.content);
  const [rgb, setRgb] = useState<RGBColor>();
  const [colorModal, setColorModal] = useState(false);

  const handleTextChage = (text: string) => {
    const tmp: TextType = {
      id: contents.id,
      content: text,
      fontSize: contents.fontSize,
      fontColor: contents.fontColor,
    };
    setContents(tmp);
  };

  const handleColorChange = (color: RGBColor) => {
    const tmp: TextType = {
      id: contents.id,
      content: contents.content,
      fontSize: contents.fontSize,
      fontColor: color,
    };
    setContents(tmp);
  };

  const handleSizeChange = (size: TextSizeType) => {
    const tmp: TextType = {
      id: contents.id,
      content: contents.content,
      fontSize: size,
      fontColor: contents.fontColor,
    };
    setContents(tmp);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={texts[id] || ''}
        onChange={(e) => {
          texts[id] = e.target.value ?? '';
          setTexts([...texts]);
          handleTextChage(e.target.value ?? '');
          if (texts[id].length > 36) toast('📣 너무 길지 않을까요?', { autoClose: 2000, theme: 'colored' });
          if (texts[id].length == 0) handleTextChage(placeholder);
        }}
        placeholder={placeholder}
        // style={{ color: getRGB(colors[id]) }}
      />
      <div className={styles.buttonGroup}>
        <div className={styles.buttonGroup}>
          <button
            className={colors[id] === TEXT_WHITE ? styles.selectedColorButton : styles.colorButton}
            style={{ background: getRGB(TEXT_WHITE) }}
            onClick={() => {
              colors[id] = TEXT_WHITE;
              setColors([...colors]);
              setColorModal(false);
              handleColorChange(TEXT_WHITE);
            }}
          >
            <BsCheck className={'tablet:text-[32px]'} />
          </button>
          <button
            className={colors[id] === TEXT_BLACK ? styles.selectedColorButton : styles.colorButton}
            style={{ background: getRGB(TEXT_BLACK) }}
            onClick={() => {
              colors[id] = TEXT_BLACK;
              setColors([...colors]);
              setColorModal(false);
              handleColorChange(TEXT_BLACK);
            }}
          >
            <BsCheck className={'tablet:text-[32px]'} style={{ color: 'white' }} />
          </button>
          <span style={{ position: 'relative' }}>
            <button
              className={
                colors[id] !== TEXT_BLACK && colors[id] !== TEXT_WHITE ? styles.selectedColorButton : styles.colorButton
              }
              style={{
                background: !colorModal
                  ? 'conic-gradient(from 180deg at 50% 50%, #FF5151 0deg, #FFF850 115.5deg, #50FFA1 218.62deg, #6950FF 360deg)'
                  : 'white',
              }}
              onClick={() => {
                setColors([...colors]);
                setColorModal(!colorModal);
              }}
            >
              {!colorModal ? (
                <>
                  <BsCheck
                    className={'tablet:text-[32px]'}
                    style={{ position: 'absolute', zIndex: 1, color: 'black' }}
                  />
                </>
              ) : (
                <p>
                  <IoMdClose className={`${styles.closeBtn} tablet:text-[32px]`} />
                </p>
              )}
            </button>
            {colorModal && (
              <div style={{ position: 'absolute', zIndex: 2, left: '100%', top: '-400%' }}>
                <ChromePicker
                  color={rgb}
                  onChange={(e) => {
                    colors[id] = e.rgb;
                    setColors([...colors]);
                    setRgb(e.rgb);
                  }}
                  onChangeComplete={(e) => {
                    handleColorChange(e.rgb);
                  }}
                />
              </div>
            )}
          </span>
        </div>
        <div className={styles.buttonGroup}>
          <button
            className={contents.fontSize === TEXT_LG ? styles.selectedSizeButton : styles.sizeButton}
            style={{ fontSize: '20px' }}
            onClick={() => {
              handleSizeChange(TEXT_LG);
            }}
          >
            <FaFont />
          </button>
          <button
            className={contents.fontSize === TEXT_MD ? styles.selectedSizeButton : styles.sizeButton}
            style={{ fontSize: '16px' }}
            onClick={() => {
              handleSizeChange(TEXT_MD);
            }}
          >
            <FaFont />
          </button>
          <button
            className={contents.fontSize === TEXT_SM ? styles.selectedSizeButton : styles.sizeButton}
            style={{ fontSize: '12px' }}
            onClick={() => {
              handleSizeChange(TEXT_SM);
            }}
          >
            <FaFont />
          </button>
        </div>
      </div>
    </>
  );
};

export default TextItem;
