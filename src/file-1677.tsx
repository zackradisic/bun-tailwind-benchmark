import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center space-y-8 p-6">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="bg-white/30 rounded-xl p-6 mb-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Server Response
          </h2>
          <p className="text-xl font-medium text-white/90 animate-pulse">
            {serverData.message}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white/30 rounded-xl p-4 flex items-center space-x-4">
            <button 
              onClick={() => setCounter(counter - 1)}
              className="bg-red-500/50 text-white px-4 py-2 rounded-lg hover:bg-red-600/70 transition-colors"
            >
              -
            </button>
            <span className="text-3xl font-bold text-white">{counter}</span>
            <button 
              onClick={() => setCounter(counter + 1)}
              className="bg-green-500/50 text-white px-4 py-2 rounded-lg hover:bg-green-600/70 transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-white/80 max-w-xl mx-auto">
        <p className="text-sm italic">
          Built with Bun 🥟 React 🌟 TypeScript 💻 Tailwind 🌈
        </p>
      </div>
    </div>
  );
}
