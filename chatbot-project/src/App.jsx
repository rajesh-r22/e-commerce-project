import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages'

import './App.css'
 
function App() {
  const [chatMessages, setChatMessages] = useState([{

    message: 'hello ChatBot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'Bot',
    id: 'id2'
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is November 5',
    sender: 'Bot',
    id: 'id4'
  },]);
  // const [chatMessages,setChatMessages]=array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1]

  return (
    <div className="App-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
