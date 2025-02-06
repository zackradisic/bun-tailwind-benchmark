import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setServerData(data))
      .catch(error => setServerData({ message: 'Error fetching data' }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-500/20 p-6 rounded-xl border border-blue-300/30 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Server Side</h2>
            <p className="text-xl font-medium text-blue-100">
              Server Message: {serverData.message}
            </p>
          </div>
          
          <div className="bg-green-500/20 p-6 rounded-xl border border-green-300/30 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-green-200">Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCount(c => c + 1)}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-green-100">
                Count: {clientCount}
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-xl font-light text-white/70 italic">
            Built with Bun, React, TypeScript & Tailwind
          </p>
          <div className="flex justify-center space-x-4">
            <div className="h-2 w-16 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="h-2 w-16 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="h-2 w-16 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
