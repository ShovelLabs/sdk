import { useState } from "react";

export default function Home() {
  const [symbol, setSymbol] = useState("");

  return (
    <main style={{ padding: 40 }}>
      <h1>🛠️ Shovel</h1>
      <p>Create, chat, and trade tokens on Solana</p>

      <input
        placeholder="Token Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <button
        onClick={() => alert(`Token ${symbol} created (mock) 🚀`)}
      >
        Create Token
      </button>
    </main>
  );
}
