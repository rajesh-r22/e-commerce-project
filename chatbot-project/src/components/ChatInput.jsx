import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [currInput, setCurrInput] = useState('');

  function saveInputText(event) {
    setCurrInput(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: currInput,
        sender: "user",
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(currInput);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "Bot",
        id: crypto.randomUUID()
      }
    ]);


    setCurrInput('')
  }

  return (
    <div className="input-container">
      <input className="input"
        placeholder="send a messege  to ChatBot"
        size="30"
        onChange={saveInputText}
        value={currInput}
      />
      <button className="send-btn" onClick={sendMessage}>Send</button>
    </div>
  );
}
