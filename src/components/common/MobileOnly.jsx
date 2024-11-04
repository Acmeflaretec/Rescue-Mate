import React from "react";

const MobileOnly = ({ children }) => {
  return (
    <div className="text-white flex justify-center">
      <div className="sm:hidden h-full w-full mb-16">{children}</div>
      <div className="hidden sm:block m-10 p-20 w-full mt-[30vh] bg-sky-900 rounded-xl">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          className="h-12 w-full animate-bounce"
        >
          <path
            d="M85.81 120H34.19a8.39 8.39 0 0 1-8.38-8.39V8.39A8.39 8.39 0 0 1 34.19 0h51.62a8.39 8.39 0 0 1 8.38 8.39v103.22a8.39 8.39 0 0 1-8.38 8.39zM34.19 3.87a4.52 4.52 0 0 0-4.51 4.52v103.22a4.52 4.52 0 0 0 4.51 4.52h51.62a4.52 4.52 0 0 0 4.51-4.52V8.39a4.52 4.52 0 0 0-4.51-4.52z"
            fill="white"
          />
          <path
            d="M73.7 10.32H46.3L39.28 3.3 42.01.57l5.89 5.88h24.2L77.99.57l2.73 2.73-7.02 7.02zM47.1 103.23h25.81v3.87H47.1z"
            fill="white"
          />
        </svg>
        <p className="text-center rounded-lg pt-4">
          This app is currently optimized for mobile use only.
          <br />
          Please open it on a mobile device.
        </p>
      </div>
      <p className="fixed bottom-0 w-full text-center text-xs text-stone-300 py-2 -z-50">
        Copyright @ Rescue Mate. All rights reserved.
      </p>
    </div>
  );
};

export default MobileOnly;
