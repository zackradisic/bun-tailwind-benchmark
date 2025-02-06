import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string } | null>(null);
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-2xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight drop-shadow-lg">
          🚀 Bun Fullstack Magic
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            {serverData ? (
              <p className="text-xl text-blue-100 animate-pulse">
                {serverData.message}
              </p>
            ) : (
              <div className="animate-spin h-10 w-10 mx-auto border-4 border-white/50 border-t-white rounded-full"></div>
            )}
          </div>

          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Client Counter</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-red-500/50 hover:bg-red-500/70 text-white rounded-full p-2 transition-all"
              >
                -
              </button>
              <span className="text-3xl font-bold text-white">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500/50 hover:bg-green-500/70 text-white rounded-full p-2 transition-all"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-white/70">
          Built with 💖 using Bun, React & TypeScript
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-white/10 rounded-xl p-4 text-white text-xs">
        Fullstack in one file? <span className="font-bold">✨ Bun Magic ✨</span>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
