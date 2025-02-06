import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/demo');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };
    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center max-w-2xl w-full transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-xl text-white/80 font-mono tracking-wide">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client State</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-red-500/50 hover:bg-red-500/70 text-white px-4 py-2 rounded-full transition-all"
              >
                -
              </button>
              <span className="text-3xl font-bold text-white">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500/50 hover:bg-green-500/70 text-white px-4 py-2 rounded-full transition-all"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-white/60">
          Built with 
          <span className="mx-2 font-bold text-yellow-300">Bun</span> 
          🚀 React 
          <span className="mx-2 font-bold text-blue-300">TypeScript</span>
        </div>
      </div>
    </div>
  );
}
