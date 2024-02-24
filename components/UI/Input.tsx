/* eslint-disable react/jsx-props-no-spreading */
"use client";
import { Eye, EyeSlash } from "iconsax-react";
import React, { useState } from "react";

const variantClasses = {
  default: "border-solid border border-white text-white",
  primary:
    "border-solid border-dark-gray border focus-within:text-dark-gray text-dark-gray",
  secondary: "border-0 !bg-secondary-1 text-dark-gray",
  tertiary: "border-0 text-white",
};

const sizeClasses = {
  sm: "text-sm py-2",
  md: "text-base py-3",
  lg: "text-lg py-4",
};

function getVariantClass(variant: Variant) {
  return variantClasses[variant] || variantClasses.default;
}

function getSizeClass(size: Size) {
  return sizeClasses[size] || sizeClasses.sm;
}

export function SelectInput({
  options,
  leftIcon,
  caretSize,
  caretColor,
  onChange,
  disabled,
  optionColor,
  variant = "default",
  inputSize = "sm",
  width,
  ...props
}: SelectInputProps) {
  const variantClass = getVariantClass(variant);
  const sizeClass = getSizeClass(inputSize);
  const classNames = `${variantClass} ${sizeClass}`;

  return (
    <div
      className={`relative px-4 py-3 flex items-center justify-center h-[48px] rounded-[10px] font-manropeL text-dark-100 hide-caret transition-all select-none focus-within:border-brand-green-primary ${classNames}  ${
        disabled && "bg-[#A5B4FC] opacity-[.8] border-[1px] cursor-not-allowed"
      }`}
      style={{
        width: width ? width : "auto",
      }}
    >
      {leftIcon && <div className="absolute top-2.5 left-2">{leftIcon}</div>}
      <select
        onChange={onChange}
        className={`w-full border-none outline-none bg-transparent hide-caret ${
          leftIcon ? "pl-7" : ""
        } ${disabled ? "cursor-not-allowed" : ""}}`}
        {...(props as any)}
        disabled={disabled}
      >
        {options.map((op, idx) => (
          <option
            key={idx}
            value={op.value}
            disabled={op.disabled}
            className={`${optionColor}`}
          >
            {op.label}
          </option>
        ))}
      </select>
      <svg
        width={caretSize ?? "30"}
        height={caretSize ?? "30"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className=" top-3 right-5"
      >
        <path
          fill={caretColor ?? "#7777"}
          fillRule="evenodd"
          d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export function Input({
  leftIcon,
  rightIcon,
  type,
  isLoading,
  disabled,
  onChange,
  placeholder,
  variant = "default",
  inputSize = "sm",
  inputType = "input",
  width,
  rows,
  label,
  ...props
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const variantClass = getVariantClass(variant);
  const sizeClass = getSizeClass(inputSize);
  const classNames = `${variantClass} ${sizeClass}`;

  const handleShowPasswordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex flex-col gap-4"
      style={{
        width: width ?? "auto",
      }}
    >
      {label && (
        <label className="text-gray-3 text-Text-lg font-semibold">
          {label}
        </label>
      )}
      <div
        className={`relative px-4 py-3 flex items-center justify-center gap-3 rounded-[10px] font-manropeL text-dark-100 hide-caret transition-all select-none focus-within:border-brand-green-primary ${classNames} ${
          disabled ?? isLoading
            ? "bg-[#A5B4FC] opacity-[.8] border-[1px] cursor-not-allowed"
            : "bg-transparent"
        }`}
        style={{
          height: inputType === "input" ? "48px" : rows ? `${rows}px` : "120px",
        }}
      >
        {leftIcon && leftIcon}
        {inputType === "input" ? (
          <input
            onChange={onChange}
            type={type}
            className={`w-full outline-none hide-caret ${
              disabled ?? isLoading
                ? "cursor-not-allowed bg-[#A5B4FC]"
                : "bg-transparent"
            } ${leftIcon ? "pl-1" : ""} `}
            placeholder={placeholder ?? "placeholder"}
            disabled={isLoading ?? disabled}
            {...props}
          />
        ) : (
          <textarea
            onChange={onChange}
            className={`w-full outline-none hide-caret resize-none ${
              disabled ?? isLoading
                ? "cursor-not-allowed bg-[#A5B4FC]"
                : "bg-transparent"
            } ${leftIcon ? "pl-1" : ""} `}
            placeholder={placeholder ?? "placeholder"}
            disabled={isLoading ?? disabled}
            {...props}
            style={{
              height: rows ? `${rows - 32}px` : "100px",
            }}
          />
        )}
        {type === "password" && (
          <button onClick={handleShowPasswordClick}>
            {showPassword ? (
              <EyeSlash color="#848484" />
            ) : (
              <Eye color="#848484" />
            )}
          </button>
        )}
        <style jsx>{`
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-background-clip: text;

            -webkit-text-fill-color: ${variant === "default" ? "#fff" : "#000"};
            //this transition actually does nothing, its a fallback for older chrome browswers
            transition: background-color 5000s ease-in-out 0s;
            box-shadow: inset 0 0 20px 20px transparent;
          }
        `}</style>
        {rightIcon && rightIcon}
      </div>
    </div>
  );
}
