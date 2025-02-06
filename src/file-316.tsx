import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">🚀 Server Side</h2>
            <p className="text-gray-700 font-medium">
              Server Message: 
              <span className="ml-2 text-green-600 font-bold">
                {serverData.message}
              </span>
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 shadow-md transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">💻 Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-purple-800">
                Count: {clientCounter}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, TypeScript & Tailwind ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
