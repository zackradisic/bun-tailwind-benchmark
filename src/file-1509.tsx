import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [serverData, setServerData] = useState<string | null>(null);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.text();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-10 text-center transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <p className="text-gray-700">
              {serverData ? (
                <span className="font-mono text-green-600">{serverData}</span>
              ) : (
                <span className="animate-pulse text-gray-400">Loading...</span>
              )}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-4">Count: {clientCount}</p>
              <button 
                onClick={() => setClientCount(clientCount + 1)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform active:scale-95"
              >
                Increment
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 italic">
          Built with 🔥 Bun, React, and Tailwind
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
