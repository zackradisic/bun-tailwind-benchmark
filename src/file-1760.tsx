import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: number }>({
    message: 'Loading...',
    timestamp: 0
  });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data', timestamp: Date.now() });
      }
    };

    fetchServerData();
    const interval = setInterval(() => fetchServerData(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-2xl transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-white text-center mb-6 tracking-tight drop-shadow-lg">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-xl text-blue-100 font-mono">
              {serverData.message}
            </p>
            <p className="text-sm text-blue-200 mt-2">
              Timestamp: {new Date(serverData.timestamp).toLocaleString()}
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Client Counter</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-red-500/50 hover:bg-red-500/70 text-white px-4 py-2 rounded-full transition-all"
              >
                -
              </button>
              <span className="text-4xl font-bold text-white">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500/50 hover:bg-green-500/70 text-white px-4 py-2 rounded-full transition-all"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-white/70">
            Built with 💖 using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}

// Ensure client-side rendering
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackDemo />);
}
