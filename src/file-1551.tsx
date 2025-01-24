import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setServerData(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Playground 🚀
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-white/30 p-6 rounded-2xl shadow-md transform transition-all hover:rotate-3">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-xl text-white font-semibold animate-pulse">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-white/30 p-6 rounded-2xl shadow-md transform transition-all hover:-rotate-3">
            <h2 className="text-2xl font-bold text-white mb-4">Client Counter</h2>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold text-white">{clientCounter}</span>
              <button
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-white/70 italic">
          Built with Bun, React & TypeScript ✨
        </div>
      </div>
    </div>
  );
}
