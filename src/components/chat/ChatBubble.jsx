import React from "react";

const ChatBubble = ({ message, timestamp, isUserMessage }) => {
  return (
    <div
      className={`flex items-start gap-2.5 ${
        isUserMessage ? "justify-end" : ""
      }`}
    >
      {!isUserMessage && (
        <img
          className="w-6 h-6 rounded-full"
          src="logo192.png"
          alt="opposite user"
        />
      )}
      <div
        className={`flex flex-col gap-1 ${
          isUserMessage ? "items-end" : "items-start"
        } w-full max-w-[300px]`}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-white">
            {isUserMessage ? "You" : "Rescue Mate"}
          </span>
        </div>
        <div
          className={`flex flex-col leading-1.5 p-4 border border-gray-200 ${
            isUserMessage
              ? "bg-sky-800 rounded-s-xl rounded-se-xl"
              : "bg-gray-700 rounded-e-xl rounded-es-xl"
          }`}
        >
          <p className="text-sm font-normal text-white">{message}</p>
        </div>
        <span className="text-sm font-normal text-gray-400">{timestamp}</span>
      </div>

      {isUserMessage && (
        <svg
          class="w-8 h-8 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
            clip-rule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default ChatBubble;
