import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-6">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="bg-blue-500/30 rounded-full p-4 shadow-md">
            <span className="text-3xl font-bold text-white">{count}</span>
          </div>
          
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-all active:scale-95 shadow-lg"
          >
            Increment
          </button>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Server Response</h2>
          <p className="text-xl text-white/80 animate-pulse">{serverData.message}</p>
        </div>
      </div>

      <div className="text-center text-white/70 max-w-xl">
        <p className="text-sm italic">
          Built with Bun 🌱 - Seamlessly combining server and client magic in one TypeScript framework
        </p>
      </div>
    </div>
  );
}
