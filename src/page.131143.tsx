import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(err => setServerData({ message: 'Error fetching data' }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Server Side</h2>
            <p className="text-xl font-semibold text-blue-100">
              {serverData.message}
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold mb-4 text-green-200">Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
              >
                Increment
              </button>
              <span className="text-3xl font-bold text-green-100">
                {clientCounter}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm opacity-80">
            Built with 🚀 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
