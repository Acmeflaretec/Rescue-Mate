import React, { useState } from 'react';
import { FiPhone, FiUserCheck, FiAlertTriangle, FiShield } from 'react-icons/fi';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="fixed bottom-20 right-5 flex flex-col items-center space-y-2">
      <button
        onClick={handleToggle}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
        title="Contact"
      >
        <FiPhone size={24} />
      </button>
      {isOpen && (
        <div className="space-y-2 transition-opacity duration-300 ease-in-out">
          <button
            className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-white hover:bg-red-600 transition transform hover:-translate-y-1 shadow-md"
            onClick={() => handleClick(100)}
            title="Police"
          >
            <FiShield size={20} />
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition transform hover:-translate-y-1 shadow-md"
            onClick={() => handleClick(102)}
            title="Ambulance"
          >
            <FiAlertTriangle size={20} />
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white hover:bg-green-600 transition transform hover:-translate-y-1 shadow-md"
            onClick={() => handleClick(101)}
            title="Fire Engine"
          >
            <FiUserCheck size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
