import { useState } from 'react';

const ColorUploader = () => {
  const [tab, setTab] = useState('1');
  return (
    <div>
      <div className="flex">
        <div>단색 배경</div>
        <div className="text-primary-160">그라데이션 배경</div>
      </div>
    </div>
  );
};
export default ColorUploader;
