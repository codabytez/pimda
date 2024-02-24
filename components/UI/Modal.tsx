import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Modal: NextPage<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = isOpen ? (
    <>
      <div
        className="fixed inset-0 z-50"
        style={{ backdropFilter: "blur(4.5px)" }}
      ></div>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={handleOverlayClick}
      >
        <div
          className="absolute inset-0"
          style={{ pointerEvents: "none" }}
        ></div>
        <div
          className="bg-black/5 p-10 rounded-xl backdrop-blur-[205px] z-50 overflow-auto max-h-full"
          style={{ pointerEvents: "auto" }}
        >
          {children}
        </div>
      </div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as Element
    );
  } else {
    return null;
  }
};
