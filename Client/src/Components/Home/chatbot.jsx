import React, { useState } from "react";
import "./chatbot.css";
import initialBot from "./ChatbotAssets/initial_bot.png";
import finalBot from "./ChatbotAssets/final_bot.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "This is a bot reply", user: false },
      ]);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      <button className="chatbot-button" onClick={toggleChatbot}>
        <img src={isOpen ? finalBot : initialBot} alt="Chatbot" />
      </button>
      {isOpen && (
        <div className="chatbot-container open">
          <div className="chatbot-header">ChatBot</div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.user ? "user-message" : "bot-reply"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
