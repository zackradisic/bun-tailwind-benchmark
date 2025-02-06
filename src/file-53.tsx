import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(err => setServerData({ message: 'Error fetching data' }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <p className="text-lg text-blue-900 font-semibold">
              Server Response: 
              <span className="ml-2 text-green-600">{serverData.message}</span>
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-green-900">
                Count: {clientCounter}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-medium text-gray-700 animate-pulse">
            Built with Bun: TypeScript, React, and Tailwind in one seamless experience! 🚀
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-600 bg-white/50 backdrop-blur-sm rounded-full px-6 py-2">
        Bun v1.1.x Fullstack Demo
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
