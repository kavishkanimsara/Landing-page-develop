import React, { useState } from 'react';
import botimage from '../assets/robo.png';
import userimage from '../assets/man.png';

const ChatBody = ({ messages, sendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-[80vh] bg-black text-white p-4">
      {/* Chat messages container */}
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'} mb-2`}>
            {message.sender === 'bot' && (
              <div className="w-10 h-10">
                <img
                  src={botimage}
                  alt="Bot"
                  className="rounded-full"
                />
              </div>
            )}
            <div className={`max-w-xs p-3 rounded-lg ${message.sender === 'bot' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
              {message.text}
            </div>
            {message.sender === 'user' && (
              <div className="w-10 h-10">
                <img
                  src={userimage}
                  alt="User"
                  className="rounded-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat input form at the bottom */}
      <form onSubmit={handleSend} className="flex items-center">
        <input
          type="text"
          className="w-full p-2 rounded-full bg-gray-800 text-gray-300"
          placeholder="Type a new message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="ml-2 p-2 rounded-full bg-yellow-500 text-white">
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatBody;
