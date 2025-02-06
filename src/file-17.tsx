import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<string | null>(null);
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.text())
      .then(setServerData)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h2 className="font-bold text-blue-800">Server Response:</h2>
            <p className="text-blue-600 italic">
              {serverData || 'Loading server data...'}
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg flex items-center justify-between">
            <h2 className="font-bold text-purple-800">Client Counter:</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev - 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                -
              </button>
              <span className="text-2xl font-bold text-purple-700">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 opacity-75 hover:opacity-100 transition-opacity">
            Built with 🔥 Bun + React + TypeScript
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 opacity-50">
        Fullstack in seconds with Bun's simple dev server
      </div>
    </div>
  );
}
