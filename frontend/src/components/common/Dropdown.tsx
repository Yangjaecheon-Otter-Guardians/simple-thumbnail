import React, { useState, MouseEvent } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { BsCheck2 } from 'react-icons/bs';

interface Props<T> {
  list: T[];
  handleChange: (selectedValue: T) => void;
  styleList?: string[];
}

function Dropdown<T extends string>({ list, handleChange, styleList }: Props<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(list[0]);
  const [dropdownList, setDropdownList] = useState(
    list.map((elem, idx) => {
      return { content: elem, checked: idx === 0 ? true : false };
    }),
  );

  const handleLabelClose = (e: MouseEvent<HTMLLIElement>) => {
    const selectedContent = e.currentTarget.dataset.content as T;
    setIsOpen(false);
    setDropdownList(
      dropdownList.map((elem) => {
        return { content: elem.content, checked: elem.content === selectedContent ? true : false };
      }),
    );
    setTitle(selectedContent);
    handleChange(selectedContent);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center px-4 border-1 border-black rounded-md h-11 text-sm"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>{title}</div>
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <div className="absolute top-full bg-white w-full border-1 border-black mt-2 flex flex-col rounded-md z-10">
          <ul className="[&>*]:px-4 [&>*]:h-11 [&>*]:flex [&>*]:items-center">
            {dropdownList.map((option, idx) => (
              <li
                className={`flex justify-between ${styleList && styleList[idx]}`}
                key={option.content}
                data-content={option.content}
                onClick={handleLabelClose}
              >
                <span>{option.content}</span>
                {option.checked && <BsCheck2 />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Dropdown;
