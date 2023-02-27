import { ratioAtom } from 'atom';
import Dropdown from 'components/common/Dropdown';
import { useSetRecoilState } from 'recoil';

export default function RatioTool() {
  const setPreviewRatio = useSetRecoilState(ratioAtom);

  const handleSelectChange = (selectedRatio: keyof PreviewRatioOptionsType) => {
    setPreviewRatio(PREVIEWRATIOOPTIONS[selectedRatio]);
  };

  return (
    <div className="w-full my-[10px]">
      <div className="mb-[10px] font-bold">레이아웃</div>
      <Dropdown
        defaultValue={1}
        list={Object.keys(PREVIEWRATIOOPTIONS) as (keyof PreviewRatioOptionsType)[]}
        handleChange={handleSelectChange}
      />
    </div>
  );
}

interface PreviewRatioOptionsType {
  '1 : 1': number;
  '4 : 3': number;
  '16 : 9': number;
}

const PREVIEWRATIOOPTIONS: PreviewRatioOptionsType = {
  '1 : 1': 1,
  '4 : 3': 4 / 3,
  '16 : 9': 16 / 9,
};
