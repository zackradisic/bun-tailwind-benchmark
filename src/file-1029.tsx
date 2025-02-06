import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    async function fetchServerData() {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data', timestamp: '' });
      }
    }
    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center mb-6">
          ⚡️ Bun Fullstack Magic ⚡️
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-tr from-blue-100 to-purple-100 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🖥️ Server Data</h2>
            <p className="text-lg text-purple-700 font-medium">
              Message: {serverData.message}
            </p>
            <p className="text-sm text-purple-500 mt-2">
              Timestamp: {serverData.timestamp}
            </p>
          </div>

          <div className="bg-gradient-to-tr from-green-100 to-teal-100 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">🚀 Client State</h2>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-extrabold text-teal-700">
                Count: {clientCounter}
              </span>
              <div className="space-x-2">
                <button 
                  onClick={() => setClientCounter(c => c + 1)}
                  className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  +
                </button>
                <button 
                  onClick={() => setClientCounter(c => Math.max(0, c - 1))}
                  className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
