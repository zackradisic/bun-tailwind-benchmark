import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
          message: 'Failed to fetch', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Server Side */}
          <div className="bg-gradient-to-tr from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-inner">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Response</h2>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-blue-700">
                Message: {serverData.message}
              </p>
              <p className="text-sm text-blue-500">
                Timestamp: {serverData.timestamp}
              </p>
            </div>
          </div>

          {/* Client Side */}
          <div className="bg-gradient-to-tr from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 shadow-inner">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Client Interaction</h2>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-4xl font-black text-green-700">
                {clientCounter}
              </span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setClientCounter(c => c + 1)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all active:scale-95 shadow-md"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setClientCounter(0)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all active:scale-95 shadow-md"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 italic">
          Built with 🚀 Bun, React, and Tailwind
        </div>
      </div>
    </div>
  );
}
