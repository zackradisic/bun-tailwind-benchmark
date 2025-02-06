import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverMessage, setServerMessage] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-center space-x-6 mb-8">
          <button 
            onClick={() => setCounter(counter + 1)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-110 active:scale-95"
          >
            Counter: {counter}
          </button>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Server Response:</h2>
          <p className="text-xl font-mono animate-bounce">
            {serverMessage || 'Loading...'}
          </p>
        </div>
      </div>

      <div className="text-center text-white/80 max-w-xl">
        <p className="text-sm italic tracking-wide">
          Built with Bun 🚀 React 💻 TypeScript ⚡️ Tailwind 🎨
        </p>
      </div>
    </div>
  );
}
