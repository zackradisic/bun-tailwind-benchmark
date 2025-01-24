import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackDemo: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string } | null>(null);
  const [count, setCount] = useState(0);

  const fetchServerData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setServerData(data);
    } catch (error) {
      console.error('Failed to fetch server data', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl transform hover:scale-105 transition-all duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-6 text-center">
          ⚡ Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Client State</h2>
            <div className="flex items-center justify-between">
              <span className="text-4xl font-mono text-indigo-600">{count}</span>
              <button 
                onClick={() => setCount(count + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Data</h2>
            {serverData ? (
              <p className="text-green-600 font-semibold">{serverData.message}</p>
            ) : (
              <button 
                onClick={fetchServerData}
                className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors w-full"
              >
                Fetch Server Data
              </button>
            )}
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
};

export default BunFullstackDemo;
