import React, { useState } from "react";
import axios from "axios";
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

  const sendMessage = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);

      try {
        const response = await axios.post('http://localhost:5000/api/chatbot', {
          message: input,
        });

        const botReply = response.data.response || "Error generating response";
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, user: false },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Failed to fetch response. Please try again later.",
            user: false,
          },
        ]);
      }

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
        <img src={isOpen ? finalBot : initialBot} alt="Chatbot" className="chatbot-icon" />
      </button>
      {isOpen && (
        <div className="chatbot-container open">
          <div className="chatbot-header">
            ChatBot
            <button className="close-button" onClick={toggleChatbot}>✖</button>
          </div>
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
