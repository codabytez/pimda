import { NextPage } from "next";
import Link from "next/link";

const Button: NextPage<ButtonProps> = ({
  children,
  isLoading,
  disabled,
  leftIcon,
  rightIcon,
  href,
  spinnerColor,
  spinnerSize,
  onClick,
  variant = "primary",
  size = "md",
  width,
  ...props
}) => {
  const variantClasses = {
    primary:
      "bg-primary-5 text-black hover:bg-primary-1 focus:bg-sky-blue/80 active:bg-sky-blue disabled:bg-gray-300 disabled:cursor-not-allowed",
    secondary:
      "bg-white text-primary-5 border-[1.5px] border-primary-5 hover:bg-primary-10 hover:text-primary-1 focus:border-2 focus:border-sky-blue focus:bg-primary-7 focus:text-sky-blue disabled:border-2 disabled:border-gray-100 disabled:text-gray-400",
    tertiary:
      "bg-transparent border border-gray-2 text-gray-2 font-semibold hover:bg-primary-10/50 hover:text-primary-1 focus:border-2 focus:border-sky-blue focus:bg-primary-7/50 focus:text-sky-blue disabled:border-2 disabled:border-gray-100 disabled:text-gray-400",
    text: "bg-transparent text-primary-5 hover:text-primary-1 focus:text-sky-blue disabled:text-gray-400",
  };

  const sizeClasses = {
    sm: "text-Text-xs py-2 px-3",
    md: "text-Text-sm p-3",
    lg: "text-Text-md p-4",
  };

  const classNames = `transition-all relative flex items-center justify-center gap-5 h-auto rounded-lg font-sans ${variantClasses[variant]} ${sizeClasses[size]}`;

  if (href) {
    return (
      <Link
        className={classNames}
        {...props}
        href={href}
        style={{
          width: width ? width : "auto",
        }}
      >
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
      onClick={onClick}
      {...props}
      style={{
        width: width ? width : "auto",
      }}
    >
      <div className="w-full h-full absolute top-0 flex flex-col items-center justify-center">
        <svg
          data-testid="spinner"
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
