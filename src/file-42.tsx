import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverMessage, setServerMessage] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white font-sans">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="bg-blue-600/50 rounded-full p-4 text-2xl font-bold animate-pulse">
            Server Message: {serverMessage || 'Loading...'}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button 
            onClick={() => setCounter(counter + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-lg"
          >
            Counter: {counter}
          </button>
        </div>
      </div>

      <div className="text-sm text-white/70 max-w-xl text-center">
        Built with Bun 🥟 | React ⚛️ | TypeScript 💻 | Tailwind 🌈
      </div>
    </div>
  );
}
