import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
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
          message: 'Error fetching data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">
              Server Response
            </h2>
            <p className="text-lg font-mono bg-black/20 p-3 rounded-lg">
              {serverData.message}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Timestamp: {serverData.timestamp}
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-green-300">
              Client Interaction
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all active:scale-95"
              >
                -
              </button>
              <span className="text-3xl font-bold">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all active:scale-95"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center opacity-70 text-sm">
        Built with 🔥 Bun, React, TypeScript & Tailwind
      </div>
    </div>
  );
}
