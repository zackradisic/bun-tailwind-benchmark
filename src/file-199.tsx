import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [counter, setCounter] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>

        <div className="flex flex-col space-y-4">
          <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-white">
            <h2 className="font-bold text-xl mb-2">Server Response:</h2>
            <p className="text-lg font-mono">{serverData.message}</p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={() => setCounter(counter + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-110 active:scale-95"
            >
              Increment
            </button>
            <div className="text-white text-2xl font-bold">
              Counter: {counter}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-white/70 text-sm">
          Built with 🔥 Bun, React & TypeScript
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-white/10 px-4 py-2 rounded-full text-white/80 text-xs">
        v1.0 - Fullstack Simplicity
      </div>
    </div>
  );
}
