import { atom } from 'recoil';

type TextType = {
  id: number;
  content: string;
  fontSize: 'text-lg' | 'text-md1' | 'text-md2' | 'text-sm' | 'text-xsm';
  fontColor: 'text-white' | 'text-active' | 'text-darken' | 'text-default';
};

type LayoutPositionType = {
  justifyContent:
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly';
  alignItems: 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
};

const texts: TextType[] = [
  {
    id: 0,
    content: '제목을 입력하세요.',
    fontSize: 'text-lg',
    fontColor: 'text-white',
  },
  {
    id: 1,
    content: '내용을 입력하세요.',
    fontSize: 'text-md1',
    fontColor: 'text-default',
  },
  {
    id: 2,
    content: '내용을 입력하세요.',
    fontSize: 'text-md2',
    fontColor: 'text-white',
  },
];

const firstText = atom({
  key: 'firstText',
  default: texts[0],
});
const secondText = atom({
  key: 'secondText',
  default: texts[1],
});
const thirdText = atom({
  key: 'thirdText',
  default: texts[2],
});

const initialPosition: LayoutPositionType = {
  justifyContent: 'justify-end',
  alignItems: 'items-start',
};

const LayoutPosition = atom({
  key: 'position',
  default: initialPosition,
});

export { firstText, secondText, thirdText, LayoutPosition };
