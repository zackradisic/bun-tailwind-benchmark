import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverMessage, setServerMessage] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        setServerMessage('Failed to fetch server data');
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center space-y-8 p-6 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mb-6">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-lg"
          >
            Increment: {count}
          </button>
        </div>

        <div className="bg-black/30 rounded-xl p-4 mb-6">
          <p className="text-xl font-mono tracking-wide">
            Server Message: <span className="text-green-400">{serverMessage || 'Loading...'}</span>
          </p>
        </div>
      </div>

      <div className="text-sm opacity-70 text-white/80 bg-black/20 px-4 py-2 rounded-full">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
}
