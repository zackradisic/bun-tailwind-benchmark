import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverMessage, setServerMessage] = useState<string>('Loading...');
  const [clientCounter, setClientCounter] = useState<number>(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        setServerMessage('Failed to fetch');
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center space-y-8 p-6 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Server Side</h2>
            <p className="text-xl font-semibold text-white">
              Message: {serverMessage}
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Client Side</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev - 1)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-sm opacity-70">
          Built with 🚀 Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
}
