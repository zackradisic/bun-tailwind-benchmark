import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string, timestamp: string }>({ message: '', timestamp: '' });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function fetchServerData() {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    }
    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center transform transition-all hover:scale-105">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-lg text-blue-100">
              {serverData.message || 'Fetching...'}
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Timestamp: {serverData.timestamp || 'Loading'}
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client Counter</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setCounter(counter - 1)}
                className="bg-red-500/50 hover:bg-red-500/70 text-white px-4 py-2 rounded-full transition-all"
              >
                -
              </button>
              <span className="text-4xl font-bold text-white">{counter}</span>
              <button 
                onClick={() => setCounter(counter + 1)}
                className="bg-green-500/50 hover:bg-green-500/70 text-white px-4 py-2 rounded-full transition-all"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl text-white/80 italic">
            Built with 🏃‍♂️ Bun, React, and Tailwind
          </p>
        </div>
      </div>
      
      <div className="text-sm text-white/50 text-center max-w-xl">
        This demo shows a seamless fullstack app with client-side interactivity and server-side data fetching, 
        all bundled and served efficiently by Bun.
      </div>
    </div>
  );
}
