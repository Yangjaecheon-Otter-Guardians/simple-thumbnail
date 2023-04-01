import LoadingSpin from '../assets/loading_reverse.png';

const Loading = () => {
  return (
    <>
      <img src={LoadingSpin} alt="로딩중" className="animate-spinner w-[16px]" />
    </>
  );
};

export default Loading;
