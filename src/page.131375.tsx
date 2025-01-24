import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: number }>({
    message: 'Loading...',
    timestamp: Date.now()
  });

  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    async function fetchServerData() {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching data', 
          timestamp: Date.now() 
        });
      }
    }

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-xl text-blue-100 font-mono">
              {serverData.message}
            </p>
            <small className="text-xs text-white/50 mt-2 block">
              Timestamp: {new Date(serverData.timestamp).toLocaleString()}
            </small>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client State</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                -
              </button>
              <span className="text-3xl font-bold text-white">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-white/70 italic">
          Built with Bun, React, and Tailwind in seconds! 🚀
        </div>
      </div>
    </div>
  );
}
