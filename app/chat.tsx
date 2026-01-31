import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  return (
    <main style={{ padding: 40 }}>
      <h2>💬 Token Chat</h2>

      <input
        placeholder="Type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={() => {
          alert("Message sent on-chain (demo)");
          setMessage("");
        }}
      >
        Send
      </button>
    </main>
  );
}
