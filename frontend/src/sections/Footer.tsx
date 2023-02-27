import github from '../assets/github.svg';

function Footer() {
  return (
    <div className="w-full flex-center py-[25px] text-disabled text-[12px]">
      <div className="w-full px-5 flex flex-col items-center tablet:w-[768px] tablet:px-10">
        <span>로고</span>
        <span>© 2023 Simple Thumbnail all rights reserved.</span>
        <a href="https://github.com/Yangjaecheon-Otter-Guardians/simple-thumbnail" target="_blank">
          <div className="flex-center gap-1 font-bold">
            <img src={github} alt="github icon" width="16rem" />
            <span>simple-thumbnail</span>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Footer;
