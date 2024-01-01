// components/Dropdown.tsx
import { ArrowDown2, MessageQuestion } from "iconsax-react";
import { useEffect, useRef, useState } from "react";

const Dropdown: React.FC<DropdownProps> = ({ title, items, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" onBlur={closeDropdown}>
      <div>
        <button
          type="button"
          className="flex items-center justify-start gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {icon}
          <span className="text-Text-md font-medium text-dark-gray">
            {title}
          </span>

          <ArrowDown2 color="#292D32" className={isOpen ? "rotate-180" : ""} />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute z-30 right-0 mt-3 w-32 rounded shadow-lg bg-black/5 backdrop-blur-[75px] ring-1 ring-black ring-opacity-5">
          <div className="flex w-32 flex-col items-start transform duration-300 transition-all ease-in-out">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex pl-2 items-center gap-2 py-2 w-full hover:bg-primary-4"
                onClick={closeDropdown}
              >
                <span>
                  {typeof item === "object" && item?.icon ? item?.icon : ""}
                </span>

                <span
                  className={`${
                    typeof item === "object" && item?.danger
                      ? "text-secondary-2"
                      : "text-gray-1"
                  } text-Text-sm`}
                >
                  {typeof item === "object" && item?.label ? item?.label : ""}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
