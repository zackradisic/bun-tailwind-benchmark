import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });

  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setServerData(data))
      .catch(error => setServerData({ 
        message: 'Error fetching data', 
        timestamp: new Date().toISOString() 
      }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <p className="text-gray-700 font-medium">
              Server Message: 
              <span className="block text-blue-600 mt-2 font-bold">
                {serverData.message}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Timestamp: {serverData.timestamp}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 font-medium mb-4">
                Client Interactions:
                <span className="block text-purple-600 text-3xl font-bold mt-2">
                  {clientCount}
                </span>
              </p>
              <button 
                onClick={() => setClientCount(c => c + 1)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105"
              >
                Increment
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Built with ❤️ using Bun, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
