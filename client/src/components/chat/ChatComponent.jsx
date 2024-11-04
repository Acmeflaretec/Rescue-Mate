import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ChatBubble from "./ChatBubble";

const ChatComponent = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const fetchInitialResponse = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/analyze`, {firstQuestion:location.state});
        setMessages([{ message: response.data.response.content, isUserMessage: false }]);
      } catch (error) {
        console.error("Error fetching initial response:", error);
      }
    };
    fetchInitialResponse();
  }, [location.state]);

  const sendMessage = async () => {
    if (!userMessage) return;
    const newMessages = [...messages, { message: userMessage, isUserMessage: true }];
    setMessages(newMessages);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/analyze`, { question: userMessage });
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: response.data.response.content, isUserMessage: false },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setUserMessage("");
  };

  return (
    <div>
      <div className="p-2 py-20">
        {messages.map((item, index) => (
          <ChatBubble key={index} message={item.message} isUserMessage={item.isUserMessage} />
        ))}
      </div>
      <div className="fixed bottom-0 px-3 w-full h-20 bg-primary flex items-center">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
          placeholder="Enter your message here"
        />
        <button onClick={sendMessage} className="text-white p-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
