import InteractiveContainer from '../components/InteractiveContainer';
//
function Header() {
  return (
    <div className="w-full flex-center bg-surface drop-shadow-md py-[12px]">
      <div className="w-11/12 flex flex-row justify-between sm:w-[640px] md:w-[768px] lg:w-1024">
        <button className="w-[100px] text-left">초기화</button>
        <div className="font-semibold justify-self-center">로고</div>
        <div className="w-[100px]" />
      </div>
    </div>
  );
}

export default Header;
