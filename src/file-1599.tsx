import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [clientCount, setClientCount] = useState<number>(0);

  useEffect(() => {
    // Simulated server fetch with Bun's fetch capabilities
    fetch('/api/time')
      .then(res => res.text())
      .then(time => setServerTime(time))
      .catch(err => setServerTime('Error fetching server time'));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
            <p className="text-blue-600 font-medium text-lg">
              Server Time: 
              <span className="ml-2 text-blue-900 font-bold">{serverTime}</span>
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCount(c => c + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-purple-900 font-bold text-xl">
                Count: {clientCount}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Built with 🚀 Bun: TypeScript + React + Fullstack Simplicity
          </p>
        </div>
      </div>
    </div>
  );
}
