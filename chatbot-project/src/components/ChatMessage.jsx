 
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';


//  ChatMessage Component — Single message ka display
export function ChatMessage({ message, sender }) {
  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-bot'}>
      {sender === 'Bot' && (
        <img src={RobotProfileImage} className="chat-bot-image" />
      )}
      <div className="chat-messages-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-user-image" />
      )}
    </div>
  )
}

 