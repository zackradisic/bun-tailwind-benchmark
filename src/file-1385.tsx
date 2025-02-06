import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverMessage, setServerMessage] = useState('');
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        setServerMessage('Failed to fetch');
      }
    };
    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="space-y-4">
          <div className="bg-white/10 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold mb-2">Server Response:</h2>
            <p className="text-lg font-mono tracking-wide animate-pulse">
              {serverMessage || 'Loading...'}
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold mb-4">Client Interaction:</h2>
            <div className="flex items-center justify-between">
              <span className="text-lg">Clicks: {clientCount}</span>
              <button 
                onClick={() => setClientCount(prev => prev + 1)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition-colors duration-200 transform hover:scale-110 active:scale-95"
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center opacity-75 hover:opacity-100 transition-opacity">
        <p className="text-sm">
          Built with 🚀 Bun, React, and <span className="font-bold">Tailwind</span>
        </p>
      </div>
    </div>
  );
}
