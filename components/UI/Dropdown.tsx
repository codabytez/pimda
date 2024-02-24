// components/Dropdown.tsx
import { ArrowDown2 } from "iconsax-react";
import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";

const Dropdown: NextPage<DropdownProps> = ({ title, items, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
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
        <div
          className="origin-top-right absolute z-30 right-0 mt-3 w-32 rounded shadow-lg bg-black/5 backdrop-blur-[75px] ring-1 ring-black ring-opacity-5"
          onBlur={closeDropdown}
        >
          <div className="flex w-32 flex-col items-start transform duration-300 transition-all ease-in-out">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href ? item.href : "#"}
                className="flex pl-2 items-center gap-2 py-2 w-full hover:bg-primary-4"
                onClick={() => {
                  closeDropdown();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
              >
                <span>{item?.icon ? item?.icon : ""}</span>

                <span
                  className={`${
                    item?.danger ? "text-secondary-2" : "text-gray-1"
                  } text-Text-sm`}
                >
                  {item?.label ? item?.label : ""}
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
