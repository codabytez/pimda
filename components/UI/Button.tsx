import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Link from "next/link";

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled,
  leftIcon,
  rightIcon,
  href,
  spinnerColor,
  spinnerSize,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}) => {
  const variantClasses = {
    primary:
      "bg-green-500 text-white hover:bg-green-600 focus:bg-green-700 active:bg-green-800 disabled:bg-gray-200 disabled:cursor-not-allowed",
    secondary:
      "bg-white text-green-500 hover:bg-gray-100 focus:shadow-green-200 active:bg-green-300 disabled:bg-gray-200 border-solid border-2 border-green-500",
    success:
      "bg-green-400 hover:bg-green-500 focus:bg-green-600 active:bg-green-700 disabled:bg-gray-200 disabled:cursor-not-allowed",
    tertiary:
      "bg-green-200 text-green-500 hover:bg-gray-100 focus:shadow-green-200 active:bg-green-300 disabled:bg-gray-200 disabled:cursor-not-allowed",
    error:
      "bg-red-500 text-white hover:bg-red-600 focus:bg-red-700 active:bg-red-800 disabled:bg-gray-200 disabled:cursor-not-allowed",
  };

  const sizeClasses = {
    sm: "text-sm py-2",
    md: "text-base py-3",
    lg: "text-lg py-4",
  };

  const classNames = `relative px-4 py-3 flex items-center justify-center gap-5 ${
    fullWidth ? "w-full" : "w-max"
  } h-auto rounded-md font-sans ${variantClasses[variant]} ${
    sizeClasses[size]
  }`;

  if (href) {
    return (
      <Link className={classNames} {...props} href={href}>
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </Link>
    );
  }

  return (
    <button
      disabled={(isLoading ?? disabled) || disabled}
      className={classNames}
      {...props}
    >
      <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center">
        <svg
          width={spinnerSize ?? "20"}
          height={spinnerSize ?? "20"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`animate-spin transition delay-[.2] ${
            isLoading ? "opacity-1 visible" : "opacity-0 hidden"
          }`}
        >
          <path
            fill={spinnerColor ?? "#fff"}
            d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z"
          />
        </svg>
      </div>
      <div
        className={`flex items-center justify-center gap-2 ${
          isLoading ? "opacity-0" : "opacity-1"
        }`}
      >
        {leftIcon}
        {children}
        {rightIcon && (
          <span
            style={{
              opacity: isLoading ? 0 : 1,
            }}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;
