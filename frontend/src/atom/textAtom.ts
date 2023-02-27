import { RGBColor } from 'react-color';
import { atom, atomFamily, useResetRecoilState } from 'recoil';

export const TEXT_WHITE: RGBColor = { r: 251, g: 251, b: 251, a: 1 };
export const TEXT_BLACK: RGBColor = { r: 10, g: 10, b: 10, a: 1 };

export const TEXT_LG = 'text-lg';
export const TEXT_MD = 'text-md2';
export const TEXT_SM = 'text-sm';
export type TextSizeType = 'text-lg' | 'text-md1' | 'text-md2' | 'text-sm' | 'text-xsm';

export type TextType = {
  id: number;
  content: string;
  fontSize: TextSizeType;
  fontColor: RGBColor;
};

export type LayoutPositionType = {
  justifyContent:
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly';
  alignItems: 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
  subAlignItems: 'items-start' | 'items-end' | 'items-center';
};

const texts: TextType[] = [
  {
    id: 0,
    content: '제목을 입력하세요.',
    fontSize: 'text-lg',
    fontColor: TEXT_WHITE,
  },
  {
    id: 1,
    content: '내용을 입력하세요.',
    fontSize: 'text-md2',
    fontColor: TEXT_WHITE,
  },
  {
    id: 2,
    content: '내용을 입력하세요.',
    fontSize: 'text-sm',
    fontColor: TEXT_WHITE,
  },
];

const textCountState = atom({
  key: 'testCount',
  default: 1,
});

const textsAll = atomFamily({
  key: 'textsAll',
  default: (id: number) => {
    return {
      id: id,
      content: texts[id].content,
      fontSize: texts[id].fontSize,
      fontColor: texts[id].fontColor,
    };
  },
});

const initialPosition: LayoutPositionType = {
  justifyContent: 'justify-end',
  alignItems: 'items-start',
  subAlignItems: 'items-start',
};

const layoutPositionState = atom({
  key: 'position',
  default: initialPosition,
});

export const getRGB = (color: RGBColor) => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a ?? 1})`;
};

export { textCountState, textsAll, layoutPositionState };
