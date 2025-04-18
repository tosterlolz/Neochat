import { useState } from "react";
import { Send } from "lucide-react";

function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="flex-1 bg-neutral-800 text-white rounded-xl px-4 py-2 placeholder-gray-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Napisz wiadomość..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl text-white flex items-center gap-1"
      >
        <Send size={18} /> Wyślij
      </button>
    </div>
  );
}

export default MessageInput;
