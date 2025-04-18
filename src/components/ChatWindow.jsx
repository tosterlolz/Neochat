import MessageBubble from "./MessageBubble";

function ChatWindow({ messages }) {
  return (
    <div className="h-80 overflow-y-auto mb-4 space-y-2 pr-2">
      {messages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} timestamp={msg.timestamp} sender={msg.sender} />
      ))}
    </div>
  );
}

export default ChatWindow;
