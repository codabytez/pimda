import React from "react";
import logoIcon from "@/public/logo-icon.svg";

const Loader3: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-5/40 fixed top-0 left-0 z-[999] overflow-hidden">
      {/* eslint-disable @next/next/no-img-element */}
      <img src={logoIcon.src} alt="logo" className="animation" />

      <style jsx>
        {`
          .animation {
            animation: scaleRotate 3s linear infinite;
            padding: 20px;
          }

          @keyframes scaleRotate {
            0%,
            100% {
              transform: scale(1) rotate(0deg);
            }
            20% {
              transform: scale(1.5) rotate(0deg);
            }
            40% {
              transform: scale(1) rotate(0deg);
            }
            60% {
              transform: scale(1.5) rotate(0deg);
            }
            80% {
              transform: scale(1) rotate(0deg);
            }

            to {
              transform: scale(1) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader3;
