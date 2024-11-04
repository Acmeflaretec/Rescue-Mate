import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-3xl items-center justify-center bg-sky-800 w-full rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="animate-ping h-7 w-7"
      >
        <ellipse cx="32" cy="24" rx="12" ry="8" fill="#FF4444" stroke="none" />
        <rect
          x="20"
          y="24"
          width="24"
          height="24"
          rx="4"
          ry="4"
          fill="#FF4444"
          stroke="none"
        />
        <rect x="18" y="48" width="28" height="4" fill="#555" />
      </svg>&nbsp;
      <p className="font-black text-outline">Rescue Mate</p>&nbsp;
      <img src="rescue-team.png" className="h-28" alt="rescue-team" />
    </div>
  );
};

export default Navbar;
