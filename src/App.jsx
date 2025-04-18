import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    if (text.trim()) {
      setMessages([...messages, { text, timestamp: Date.now(), sender: "You" }]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl h-[85vh] bg-neutral-900 rounded-2xl border border-neutral-800 shadow-xl flex flex-col overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-800">
          <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
            NeoChat <span className="text-white">💬</span>
          </h1>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          <ChatWindow messages={messages} />
        </div>
        <div className="p-4 border-t border-neutral-800">
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </div>

  );
}

export default App;
