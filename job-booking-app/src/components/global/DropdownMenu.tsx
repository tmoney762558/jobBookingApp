import { useEffect, useState } from "react";
import { BiCaretDown } from "react-icons/bi";

const DropdownMenu = ({
  width,
  placeholder,
  options,
  setterFunction,
}: {
  width: string;
  placeholder: string;
  options: string[];
  setterFunction: (option: string) => void;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownSelection, setDropdownSelection] = useState("");

  useEffect(() => {
    setDropdownSelection(placeholder);
  }, [placeholder]);

  return (
    <div className={`flex flex-col gap-2 ${width}`}>
      <div className="relative">
        <button
          className="flex justify-between items-center w-full h-7 px-3 border-2 border-neutral-200 text-left text-sm cursor-pointer"
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <p>{dropdownSelection}</p>
          <BiCaretDown fontSize={"1rem"} fill="#737373"></BiCaretDown>
        </button>
        {dropdownOpen ? (
          <ul className="absolute w-full max-h-22 border-b-2 border-neutral-200 overflow-y-auto text-sm">
            {options.map((option, index) => (
              <li
                className="w-full py-1 px-3 hover:bg-white bg-neutral-100 border-x-2 border-neutral-200 cursor-pointer"
                key={index}
                onClick={() => {
                  setDropdownSelection(option);
                  setterFunction(option);
                  setDropdownOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default DropdownMenu;
