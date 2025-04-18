function MessageBubble({ text, timestamp, sender }) {
    const time = new Date(timestamp).toLocaleTimeString();
  
    return (
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
          {sender.charAt(0)}
        </div>
        <div className="flex flex-col">
          <div className="bg-neutral-800 px-4 py-2 rounded-2xl shadow-md max-w-sm">
            <span className="font-semibold text-blue-400">{sender}</span>
            <p className="text-white">{text}</p>
          </div>
          <span className="text-xs text-gray-400 mt-1">{time}</span>
        </div>
      </div>
    );
  }
  
  export default MessageBubble;
  