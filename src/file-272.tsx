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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">🌐 Server Response</h2>
            <p className="text-gray-700 font-medium">
              Message: {serverData.message}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Timestamp: {serverData.timestamp || 'Fetching...'}
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">🚀 Client Interaction</h2>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">
                Clicks: {clientCounter}
              </span>
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform active:scale-95"
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 opacity-70 hover:opacity-100 transition-opacity">
        Built with 💖 using Bun • React • TypeScript • Tailwind
      </div>
    </div>
  );
}
