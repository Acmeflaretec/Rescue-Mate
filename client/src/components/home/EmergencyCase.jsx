import React, { useState } from "react";
import DataField from "./DataField";

const EmergencyCase = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative min-h-[75vh] w-full flex justify-center items-center rounded-md">
      <div
        className={`${show && "hidden"} relative flex items-center text-lg`}
        onClick={() => setShow(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="32" y1="16" x2="32" y2="48" />
          <line x1="16" y1="32" x2="48" y2="32" />
        </svg>
        Emergency Case
        <span className="absolute top-0 left-0 w-full h-full rounded-md bg-red-500 opacity-75 animate-ping"></span>
      </div>
      {show && <DataField />}
    </div>
  );
};

export default EmergencyCase;
