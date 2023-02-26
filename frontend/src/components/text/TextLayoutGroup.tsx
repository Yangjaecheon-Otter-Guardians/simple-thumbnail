import { layoutPositionState, LayoutPositionType, textCountState } from 'atom/textAtom';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import styles from 'styles/TextTool.module.css';

const TextLayoutGroup = () => {
  const count = useRecoilValue(textCountState);
  const [layoutType, setLayoutType] = useState<string>('center');
  const setLayoutPosition = useSetRecoilState(layoutPositionState);
  return (
    <div className={styles.layoutButtonGroup}>
      {getLayoutGroupList(count).map((item, index) => {
        return (
          <button
            key={index}
            className={`${layoutType !== item ? styles.commonStyle : styles.selectedStyle} ${layoutHandler(item)}`}
            onClick={() => {
              setLayoutType(item);
              setLayoutPosition(getLayoutTailwind(item));
            }}
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

export default TextLayoutGroup;

export const getLayoutTailwind = (type: string): LayoutPositionType => {
  switch (type) {
    case 'top-left':
      return {
        justifyContent: 'justify-start',
        alignItems: 'items-start',
        subAlignItems: 'items-start',
      };
    case 'top':
      return {
        justifyContent: 'justify-start',
        alignItems: 'items-center',
        subAlignItems: 'items-center',
      };
    case 'top-right':
      return {
        justifyContent: 'justify-start',
        alignItems: 'items-end',
        subAlignItems: 'items-end',
      };
    case 'left':
      return {
        justifyContent: 'justify-center',
        alignItems: 'items-start',
        subAlignItems: 'items-start',
      };
    case 'center':
      return {
        justifyContent: 'justify-center',
        alignItems: 'items-center',
        subAlignItems: 'items-center',
      };
    case 'right':
      return {
        justifyContent: 'justify-center',
        alignItems: 'items-end',
        subAlignItems: 'items-end',
      };
    case 'bottom-left':
      return {
        justifyContent: 'justify-end',
        alignItems: 'items-start',
        subAlignItems: 'items-start',
      };
    case 'bottom':
      return {
        justifyContent: 'justify-end',
        alignItems: 'items-center',
        subAlignItems: 'items-center',
      };
    case 'bottom-right':
      return {
        justifyContent: 'justify-end',
        alignItems: 'items-end',
        subAlignItems: 'items-end',
      };
    case 'spacebetween-left':
      return {
        justifyContent: 'justify-between',
        alignItems: 'items-start',
        subAlignItems: 'items-start',
      };
    case 'spacebetween-center':
      return {
        justifyContent: 'justify-between',
        alignItems: 'items-center',
        subAlignItems: 'items-center',
      };
    case 'spacebetween-right':
      return {
        justifyContent: 'justify-between',
        alignItems: 'items-end',
        subAlignItems: 'items-end',
      };
    case 'title-author':
      return {
        justifyContent: 'justify-between',
        alignItems: 'items-start',
        subAlignItems: 'items-end',
      };
    case 'title-reauthor':
      return {
        justifyContent: 'justify-between',
        alignItems: 'items-end',
        subAlignItems: 'items-start',
      };
    default:
      return {
        justifyContent: 'justify-center',
        alignItems: 'items-center',
        subAlignItems: 'items-center',
      };
  }
};

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
    case 'title-reauthor':
      return styles.layoutTitleReAuthor;
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
        'title-author',
        'title-reauthor',
      ];
    default:
      return [''];
  }
};
