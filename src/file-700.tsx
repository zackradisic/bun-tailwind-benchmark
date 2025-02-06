import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string, timestamp: string }>({
    message: 'Initializing...',
    timestamp: new Date().toISOString()
  });

  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    async function fetchServerData() {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching server data', 
          timestamp: new Date().toISOString()
        });
      }
    }

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            <pre className="text-sm text-gray-700 bg-blue-100 p-3 rounded-lg">
              {JSON.stringify(serverData, null, 2)}
            </pre>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Counter</h2>
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold text-purple-800">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 animate-pulse">
            Built with Bun 🚀 • React & TypeScript • Seamless Fullstack
          </p>
        </div>
      </div>

      <div className="text-xs text-gray-500 opacity-50 text-center">
        Bun makes fullstack development incredibly simple and fast!
      </div>
    </div>
  );
}
