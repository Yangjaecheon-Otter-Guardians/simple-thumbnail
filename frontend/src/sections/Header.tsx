import InteractiveContainer from '../components/InteractiveContainer';

function Header() {
  return (
    <div className="w-full flex-center bg-surface drop-shadow-md py-[12px]">
      <div className="w-full flex flex-row justify-between sm:w-[640px] md:w-[768px]">
        <button className="w-[100px] pl-5 md:pl-10 text-left">초기화</button>
        <div className="font-semibold justify-self-center">로고</div>
        <div className="w-[100px]" />
      </div>
    </div>
  );
}

export default Header;
