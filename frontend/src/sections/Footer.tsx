import github from '../assets/github.svg';

function Footer() {
  return (
    <div className="w-full flex-center border-t-2 py-[25px] text-disabled text-[12px]">
      <div className="w-11/12 flex flex-col items-center sm:w-[640px] md:w-[768px]">
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
