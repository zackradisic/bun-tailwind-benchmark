import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(err => setServerData({ message: 'Error fetching data' }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center space-y-8 p-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center space-y-6 max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          ⚡ Bun Fullstack Magic ⚡
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/30 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-xl font-semibold text-white break-words">
              {serverData.message}
            </p>
          </div>

          <div className="bg-white/30 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client State</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-red-500/50 hover:bg-red-500/70 text-white px-4 py-2 rounded-full transition-all"
              >
                -
              </button>
              <span className="text-4xl font-bold text-white">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500/50 hover:bg-green-500/70 text-white px-4 py-2 rounded-full transition-all"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/30 px-4 py-2 rounded-full">
            <span className="text-white font-semibold">🚀 Bun</span>
            <span className="bg-white/50 px-2 py-1 rounded-full text-sm">v1.0</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/30 px-4 py-2 rounded-full">
            <span className="text-white font-semibold">⚛️ React</span>
            <span className="bg-white/50 px-2 py-1 rounded-full text-sm">TypeScript</span>
          </div>
        </div>
      </div>

      <footer className="text-white/70 text-sm text-center">
        Built with ❤️ using Bun's Incredible Fullstack Toolkit
      </footer>
    </div>
  );
}
