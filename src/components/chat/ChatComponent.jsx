import React from "react";
import ChatBubble from "./ChatBubble";

const ChatComponent = () => {
  const messages = [
    {
      message:
        "Feeling a persistent headache and dizziness since this morning.",
      timestamp: "10:03",
      isUserMessage: true,
    },
    {
      message:
        "I understand. Have you experienced these symptoms before, or is this the first time?",
      timestamp: "10:04",
      isUserMessage: false,
    },
    {
      message:
        "It’s happened a couple of times this month but never this intense.",
      timestamp: "10:05",
      isUserMessage: true,
    },
    {
      message:
        "Thank you for sharing that. Have you noticed any other symptoms, such as nausea, blurred vision, or sensitivity to light?",
      timestamp: "10:06",
      isUserMessage: false,
    },
    {
      message:
        "Yes, I felt a bit nauseous earlier and my vision seems a bit off.",
      timestamp: "10:07",
      isUserMessage: true,
    },
    {
      message:
        "Got it. Based on what you've shared, there could be a few possible causes, such as migraine or dehydration. Have you had enough fluids today?",
      timestamp: "10:08",
      isUserMessage: false,
    },
    {
      message:
        "I might not have had much water today. Could that really be causing this?",
      timestamp: "10:09",
      isUserMessage: true,
    },
    {
      message:
        "Yes, dehydration can sometimes lead to headaches, dizziness, and nausea. I suggest drinking some water slowly and resting for a bit.",
      timestamp: "10:10",
      isUserMessage: false,
    },
    {
      message: "Okay, I’ll try that. Anything else I should do?",
      timestamp: "10:11",
      isUserMessage: true,
    },
    {
      message:
        "If symptoms persist, you might also try a light snack if you haven't eaten recently. And, if you don’t feel better soon, it may be best to consult a healthcare professional.",
      timestamp: "10:12",
      isUserMessage: false,
    },
    {
      message: "Alright, thanks. I’ll follow up if I need more help.",
      timestamp: "10:13",
      isUserMessage: true,
    },
    {
      message:
        "You're very welcome! Feel free to reach out anytime. Take care!",
      timestamp: "10:14",
      isUserMessage: false,
    },
  ];

  return (
    <div>
      <div className="flex p-2 gap-2 h-16 items-center w-full bg-sky-900 fixed">
        <svg
          class="w-8 h-8 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
          />
        </svg>
        <p className="truncate">{messages?.[0]?.message}</p>
      </div>
      <div className="p-2 py-20">
        {messages.map((item) => (
          <ChatBubble
            message={item?.message}
            timestamp={item?.timestamp}
            isUserMessage={item?.isUserMessage}
          />
        ))}
      </div>
      <div className="fixed bottom-0 px-3 w-full h-20 bg-primary">
        <input
          type="text"
          id="prompt"
          className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          placeholder="enter your message here"
          required
        />
        <p className="w-full text-center text-xs text-stone-400 py-2 -z-50">
          AI can make mistakes, check important info.
        </p>
      </div>
    </div>
  );
};

export default ChatComponent;
