import { previewFont } from 'atom';
import { firstText, LayoutPosition, secondText, thirdText } from 'atom/textAtom';
import { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const TextPreview = () => {
  const font = useRecoilValue(previewFont);
  const pos = useRecoilValue(LayoutPosition);
  const first = useRecoilValue(firstText);
  const second = useRecoilValue(secondText);
  const third = useRecoilValue(thirdText);

  const fontToTailwind = useMemo(() => {
    return `font-${font}`;
  }, [font]);

  const styles = {
    container: ` w-full h-full grid grid-cols-1 place-content-cneter p-4 ${fontToTailwind}`,
    pos: `flex flex-col ${pos.justifyContent} ${pos.alignItems}`,
    first: `${first.fontColor} ${first.fontSize}`,
    second: `${second.fontColor} ${second.fontSize}`,
    third: `${third.fontColor} ${third.fontSize}`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.pos}>
        <span className={styles.first}>{first.content}</span>
        <span className={styles.second}>{second.content}</span>
        <span className={styles.third}>{third.content}</span>
      </div>
    </div>
  );
};

export default TextPreview;
