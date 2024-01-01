// components/Toast.tsx
import {
  toast,
  ToastOptions,
  TypeOptions,
  ToastPosition,
  Theme,
} from "react-toastify";

const Toast: React.FC<ToastProps> = ({
  message,
  position = "top-right",
  autoClose = 5000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined,
  type = "default",
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

export default Toast;
