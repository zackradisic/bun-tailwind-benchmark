import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });

  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/demo');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching server data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-purple-900">
                Server Message: 
                <span className="ml-2 text-indigo-600">{serverData.message}</span>
              </p>
              <p className="text-sm text-purple-500">
                Timestamp: {serverData.timestamp}
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200 shadow-md">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Client Side</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg font-semibold text-indigo-900">
                Counter: 
                <span className="ml-2 text-purple-600 text-3xl">{clientCounter}</span>
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setClientCounter(c => c + 1)}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setClientCounter(0)}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-purple-300">
          Built with 🚀 Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
}
