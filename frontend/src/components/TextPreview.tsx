import { getRGB, LayoutPosition, textCountState, textsAll } from 'atom/textAtom';
import { previewFont } from 'atom';
import { useRecoilValue } from 'recoil';

const TextPreview = () => {
  const font = useRecoilValue(previewFont);
  const cnt = useRecoilValue(textCountState);

  const pos = useRecoilValue(LayoutPosition);
  const first = useRecoilValue(textsAll(0));
  const second = useRecoilValue(textsAll(1));
  const third = useRecoilValue(textsAll(2));

  const styles = {
    container: `w-full h-full grid grid-cols-1 place-content-cneter p-4`,
    pos: `flex flex-col ${pos.justifyContent} ${pos.alignItems}`,
    first: `${first.fontColor} ${first.fontSize}`,
    second: `${second.fontColor} ${second.fontSize}`,
    third: `${third.fontColor} ${third.fontSize}`,
  };

  return (
    <div style={{ position: 'relative', zIndex: 98, fontFamily: font }} className={styles.container}>
      <div className={styles.pos}>
        {cnt > 0 && (
          <span className={styles.first} style={{ color: getRGB(first.fontColor) }}>
            {first.content}
          </span>
        )}
        {cnt > 1 && (
          <span className={styles.second} style={{ color: getRGB(second.fontColor) }}>
            {second.content}
          </span>
        )}
        {cnt > 2 && (
          <span className={styles.third} style={{ color: getRGB(third.fontColor) }}>
            {third.content}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextPreview;
