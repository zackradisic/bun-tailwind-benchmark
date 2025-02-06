import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });

  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Failed to fetch', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8 tracking-tight drop-shadow-lg">
          🚀 Bun Fullstack Magic
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-white/80 font-mono text-lg">
              {serverData.message}
            </p>
            <small className="text-white/50 block mt-2">
              {serverData.timestamp}
            </small>
          </div>

          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Client Counter</h2>
            <div className="flex justify-center items-center space-x-4">
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
      </div>

      <div className="text-white/70 text-center max-w-xl">
        <p className="italic">
          Built with Bun 🥟 - Seamlessly connecting server & client with TypeScript, React, and pure developer joy!
        </p>
      </div>
    </div>
  );
}
