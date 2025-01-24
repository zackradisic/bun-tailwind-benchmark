import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="bg-white/10 rounded-xl p-6 mb-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
          <p className="text-xl text-blue-100 font-medium animate-pulse">
            {serverData.message}
          </p>
        </div>
        
        <div className="bg-white/10 rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Client Counter</h2>
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={() => setClientCounter(c => c - 1)}
              className="bg-red-500/50 hover:bg-red-500/70 text-white font-bold py-2 px-4 rounded-full transition-all"
            >
              -
            </button>
            <span className="text-3xl font-bold text-white">{clientCounter}</span>
            <button 
              onClick={() => setClientCounter(c => c + 1)}
              className="bg-green-500/50 hover:bg-green-500/70 text-white font-bold py-2 px-4 rounded-full transition-all"
            >
              +
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center text-white/70 text-sm">
        Built with 🥟 Bun + React + TypeScript
      </div>
    </div>
  );
}
