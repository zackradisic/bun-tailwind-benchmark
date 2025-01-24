import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverMessage, setServerMessage] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.text();
        setServerMessage(data);
      } catch (error) {
        setServerMessage('Failed to fetch');
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-md transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-4 mb-6 shadow-inner">
          <span className="text-xl font-semibold">Server Response:</span>
          <p className="text-lg font-mono bg-blue-500/30 px-3 py-1 rounded-md">
            {serverMessage || 'Loading...'}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-110"
            >
              -
            </button>
            <span className="text-3xl font-bold text-yellow-300">{count}</span>
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-110"
            >
              +
            </button>
          </div>

          <div className="w-full bg-white/10 rounded-xl p-4 text-center">
            <p className="text-sm opacity-75">
              Built with 🚀 Bun, React, TypeScript & Tailwind
            </p>
          </div>
        </div>
      </div>

      <div className="text-xs text-white/50 text-center">
        Seamless fullstack development made incredibly simple
      </div>
    </div>
  );
}
