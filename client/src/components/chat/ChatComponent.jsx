import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ChatBubble from "./ChatBubble";

import FloatingActionButton from './FloatingActionButton';

const ChatComponent = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false); 
  const [contactNumber, setContactNumber] = useState(null); 

  useEffect(() => {
    const fetchInitialResponse = async () => {
      setLoading(true); 
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/analyze`, { firstQuestion: location.state });
        setMessages([{ message: response.data.response.content, isUserMessage: false }]);
        if (response.data.contactNumber) setContactNumber(response.data.contactNumber);
      } catch (error) {
        console.error("Error fetching initial response:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchInitialResponse();
  }, [location.state]);

  const sendMessage = async () => {
    if (!userMessage) return;
    const newMessages = [...messages, { message: userMessage, isUserMessage: true }];
    setMessages(newMessages);
    setLoading(true); 

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/analyze`, { question: userMessage });
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: response.data.response.content, isUserMessage: false },
      ]);
      if (response.data.contactNumber) setContactNumber(response.data.contactNumber);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false); 
    }
    setUserMessage("");
  };

  return (
    <div>
      <div className="flex p-2 gap-2 h-16 items-center w-full bg-sky-900 fixed">
        <svg
          className="w-8 h-8 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
          />
        </svg>
        <p className="truncate">{'New Chat'}</p>
      </div>
      <div className="p-2 py-20">
        {messages.map((item, index) => (
          <ChatBubble key={index} message={item.message} isUserMessage={item.isUserMessage} />
        ))}
        {loading && <div className="text-center p-2">Loading...</div>}
        {contactNumber && (
          <div className="text-center p-2">
            <a href={`tel:${contactNumber}`} className="text-blue-500 underline">
              For more help, contact: {contactNumber}
            </a>
          </div>
        )}
      </div>
      <div className="fixed bottom-0 px-3 w-full h-20 bg-primary flex items-center">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
          placeholder="Enter your message here"
        />
        <button onClick={sendMessage} className="text-white p-2">
          Send
        </button>
      </div>
      <div className="relative bg-gray-100">
        <FloatingActionButton />
      </div>
    </div>
  );
};

export default ChatComponent;
