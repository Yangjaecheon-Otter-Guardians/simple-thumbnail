import { isEditState } from 'atom';
import { useRecoilState } from 'recoil';
import InteractiveContainer from '../components/InteractiveContainer';

function Header() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  const handleInitial = () => {
    const isDoInitial = window.confirm('정말로 초기화하시겠습니까?');
    if (isDoInitial) {
      setIsEdit(false);
      // TODO : 썸네일 상태 모두 초기화하기
    }
  };

  return (
    <div className="w-full flex-center bg-surface drop-shadow-md py-[12px]">
      <div className="w-11/12 flex flex-row justify-between sm:w-[640px] md:w-[768px] lg:w-1024">
        <button
          className="w-[100px] text-left disabled:opacity-50 hover:font-bold"
          onClick={handleInitial}
          disabled={!isEdit}
        >
          초기화
        </button>
        <div className="font-semibold justify-self-center">로고</div>
        <div className="w-[100px]" />
      </div>
    </div>
  );
}

export default Header;
