import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  list: string[];
}

function Dropdown({ list }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center px-4 border-1 border-black rounded-md h-11 text-sm"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>text</div>
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <div className="absolute top-full bg-white w-full border-1 border-black mt-2 flex flex-col rounded-md ">
          <ul className="[&>*]:px-4 [&>*]:h-11 [&>*]:flex [&>*]:items-center">
            {list.map((elem, idx) => (
              <li>aa</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Dropdown;
