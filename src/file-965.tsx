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
          message: 'Error fetching server data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="bg-white/10 rounded-xl p-6 mb-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">Server Response</h2>
          <p className="text-lg text-gray-200 break-words">
            {serverData.message}
          </p>
          <p className="text-sm text-gray-400">
            Timestamp: {serverData.timestamp}
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">Client Counter</h2>
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={() => setClientCounter(c => c - 1)}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-110"
            >
              -
            </button>
            <span className="text-4xl font-bold text-white">{clientCounter}</span>
            <button 
              onClick={() => setClientCounter(c => c + 1)}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-110"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm mt-4">
        Built with 🦊 Bun, React & TypeScript
      </div>
    </div>
  );
}
