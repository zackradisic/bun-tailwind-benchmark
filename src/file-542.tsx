import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });

  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-4 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">🌐 Server Data</h2>
            <pre className="bg-blue-100 p-3 rounded-lg text-sm text-blue-900">
              {JSON.stringify(serverData, null, 2)}
            </pre>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">💻 Client State</h2>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-5xl font-mono text-purple-600">{clientCount}</span>
              <button 
                onClick={() => setClientCount(c => c + 1)}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:from-purple-600 hover:to-blue-600 transition-all transform active:scale-95"
              >
                Increment
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Built with 🔥 Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
}
