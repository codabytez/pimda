// components/Toast.tsx
"use client";
import {
  toast,
  ToastOptions,
  TypeOptions,
  ToastPosition,
  Theme,
} from "react-toastify";

export const notify: React.FC<ToastProps> = ({
  message,
  position = "top-right",
  autoClose = 5000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined,
  type = "success",
  theme = "dark",
}) => {
  toast(message, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress,
    type,
    theme,
  });

  return null;
};

export const fetchErrorToast = (data: string) =>
  notify({ type: "error", message: `Error fetching ${data}`, theme: "light" });
