import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(error => setServerData({ message: 'Error fetching data' }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-12">
      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-2xl w-full transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
            <p className="text-blue-600 font-medium">
              Server Response: 
              <span className="ml-2 text-blue-900 font-bold animate-pulse">
                {serverData.message}
              </span>
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-xl font-bold text-purple-800">
                Counter: {clientCounter}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-600 text-sm flex space-x-4">
        <div className="bg-white/50 px-4 py-2 rounded-full">
          🚀 Built with Bun
        </div>
        <div className="bg-white/50 px-4 py-2 rounded-full">
          ⚛️ React + TypeScript
        </div>
        <div className="bg-white/50 px-4 py-2 rounded-full">
          🎨 Tailwind CSS
        </div>
      </div>
    </div>
  );
}
