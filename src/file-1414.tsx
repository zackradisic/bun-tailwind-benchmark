import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });

  const fetchServerData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setServerData(data);
    } catch (error) {
      setServerData({ message: 'Error fetching data' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        <div className="space-y-4">
          <button 
            onClick={fetchServerData}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Fetch Server Data
          </button>
          <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-center">
            <p className="text-white font-semibold text-lg">
              {serverData.message}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-white/70 max-w-xl">
        <p className="text-sm italic">
          This demo showcases Bun's seamless fullstack development with React, 
          TypeScript, and Tailwind CSS - all bundled and served in one lightning-fast runtime! 🚀
        </p>
      </div>
    </div>
  );
}
