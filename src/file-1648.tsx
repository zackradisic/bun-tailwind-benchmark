import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(error => setServerData({ message: 'Error fetching data' }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-4 space-y-8 font-sans">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 max-w-xl w-full text-center transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="bg-white/10 rounded-xl p-6 mb-6 border border-white/20 shadow-inner">
          <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
          <p className="text-xl text-white/80 font-medium">
            {serverData.message}
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-6 mb-6 border border-white/20 shadow-inner">
          <h2 className="text-2xl font-bold text-white mb-4">Client Interaction</h2>
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={() => setClientCounter(c => c - 1)}
              className="bg-red-500/50 hover:bg-red-500/70 text-white font-bold py-2 px-4 rounded-full transition-all transform active:scale-95"
            >
              -
            </button>
            <span className="text-3xl font-bold text-white">{clientCounter}</span>
            <button 
              onClick={() => setClientCounter(c => c + 1)}
              className="bg-green-500/50 hover:bg-green-500/70 text-white font-bold py-2 px-4 rounded-full transition-all transform active:scale-95"
            >
              +
            </button>
          </div>
        </div>

        <footer className="text-white/50 text-sm mt-6">
          Built with 🐰 Bun + React + TypeScript
        </footer>
      </div>
    </div>
  );
}
