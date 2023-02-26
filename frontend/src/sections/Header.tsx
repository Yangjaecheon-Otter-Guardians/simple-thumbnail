import { isEditState } from 'atom';
import { useRecoilState } from 'recoil';

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
    <div
      style={{ position: 'sticky', top: 0, zIndex: 99, boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)' }}
      className="w-full flex-center bg-surface py-[12px]"
    >
      <div className="w-full px-5 flex flex-row justify-between tablet:w-[768px] tablet:px-10">
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
