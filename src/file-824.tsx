import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string } | null>(null);
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-12 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">Server Side</h2>
            {serverData ? (
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">{serverData.message}</p>
                <p className="text-sm text-blue-600">Generated: {serverData.timestamp}</p>
              </div>
            ) : (
              <div className="animate-pulse bg-blue-200 h-20 rounded-lg"></div>
            )}
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 space-y-4">
            <h2 className="text-2xl font-bold text-purple-700">Client Side</h2>
            <div className="flex items-center justify-between bg-purple-100 p-4 rounded-lg">
              <span className="text-xl font-semibold text-purple-800">Counter: {clientCounter}</span>
              <div className="space-x-2">
                <button 
                  onClick={() => setClientCounter(c => c + 1)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  +
                </button>
                <button
                  onClick={() => setClientCounter(c => Math.max(0, c - 1))}
                  className="bg-purple-300 text-purple-800 px-4 py-2 rounded-full hover:bg-purple-400 transition-colors"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Built with 💖 using Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
