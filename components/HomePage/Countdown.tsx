"use client";
import React, { useState, useEffect } from "react";

const Countdown: React.FC<CountdownProps> = ({ endTime, style = {} }) => {
  const calculateTimeLeft = () => {
    const difference = +endTime - +new Date();
    let timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const label = (value: string, singular: string) => {
    return parseInt(value) === 1 ? singular : singular + "s";
  };

  return (
    <div className="flex items-end gap-4">
      <div
        className={`inline-flex  flex-col gap-1 shrink-0 ${
          style.rounded
            ? "rounded-full bg-white w-[65.8px] h-[65.8px] items-center justify-center"
            : "h-[50px] items-start"
        }`}
      >
        <span
          className={`text-black text-Text-xs font-poppins ${
            style.timeAboveLabel ? "order-2 font-normal" : "order-1 font-medium"
          }`}
        >
          {label(timeLeft.days, "Day")}
        </span>
        <span
          className={`text-black ${
            style.timeAboveLabel
              ? "order-1 font-poppins font-bold"
              : "order-2 font-inter text-[32px] font-bold leading-[30px] tracking-[1.28px] shrink-0"
          }`}
        >
          {timeLeft.days}
        </span>
      </div>

      {!style.noSeparator && (
        <span className="flex h-[30px] flex-col items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#082326" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#082326" />
          </svg>
        </span>
      )}

      <div
        className={`inline-flex  flex-col gap-1 shrink-0 ${
          style.rounded
            ? "rounded-full bg-white w-[65.8px] h-[65.8px] items-center justify-center"
            : "h-[50px] items-start"
        }`}
      >
        <span
          className={`text-black text-Text-xs font-poppins ${
            style.timeAboveLabel ? "order-2 font-normal" : "order-1 font-medium"
          }`}
        >
          {label(timeLeft.hours, "Hour")}
        </span>
        <span
          className={`text-black ${
            style.timeAboveLabel
              ? "order-1 font-poppins font-bold"
              : "order-2 font-inter text-[32px] font-bold leading-[30px] tracking-[1.28px] shrink-0"
          }`}
        >
          {timeLeft.hours}
        </span>
      </div>

      {!style.noSeparator && (
        <span className="flex h-[30px] flex-col items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#082326" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#082326" />
          </svg>
        </span>
      )}

      <div
        className={`inline-flex  flex-col gap-1 shrink-0 ${
          style.rounded
            ? "rounded-full bg-white w-[65.8px] h-[65.8px] items-center justify-center"
            : "h-[50px] items-start"
        }`}
      >
        <span
          className={`text-black text-Text-xs font-poppins ${
            style.timeAboveLabel ? "order-2 font-normal" : "order-1 font-medium"
          }`}
        >
          {label(timeLeft.minutes, "Minute")}
        </span>
        <span
          className={`text-black ${
            style.timeAboveLabel
              ? "order-1 font-poppins font-bold"
              : "order-2 font-inter text-[32px] font-bold leading-[30px] tracking-[1.28px] shrink-0"
          }`}
        >
          {timeLeft.minutes}
        </span>
      </div>

      {!style.noSeparator && (
        <span className="flex h-[30px] flex-col items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#082326" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#082326" />
          </svg>
        </span>
      )}

      <div
        className={`inline-flex  flex-col gap-1 shrink-0 ${
          style.rounded
            ? "rounded-full bg-white w-[65.8px] h-[65.8px] items-center justify-center"
            : "h-[50px] items-start"
        }`}
      >
        <span
          className={`text-black text-Text-xs font-poppins ${
            style.timeAboveLabel ? "order-2 font-normal" : "order-1 font-medium"
          }`}
        >
          {label(timeLeft.seconds, "Second")}
        </span>
        <span
          className={`text-black ${
            style.timeAboveLabel
              ? "order-1 font-poppins font-bold"
              : "order-2 font-inter text-[32px] font-bold leading-[30px] tracking-[1.28px] shrink-0"
          }`}
        >
          {timeLeft.seconds}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
