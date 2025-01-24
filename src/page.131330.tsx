import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Waiting for server...',
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
          message: 'Server connection failed', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="space-y-4">
          <div className="bg-white/10 rounded-xl p-4 shadow-inner">
            <h2 className="font-bold text-xl mb-2">🌐 Server Response</h2>
            <p className="text-sm opacity-80">{serverData.message}</p>
            <p className="text-xs mt-1 opacity-60">Timestamp: {serverData.timestamp}</p>
          </div>

          <div className="bg-white/10 rounded-xl p-4 shadow-inner">
            <h2 className="font-bold text-xl mb-2">💻 Client Interaction</h2>
            <div className="flex items-center justify-between">
              <span className="text-lg">Counter: {clientCounter}</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setClientCounter(c => c + 1)}
                  className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full transition-colors"
                >
                  +
                </button>
                <button 
                  onClick={() => setClientCounter(c => c - 1)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full transition-colors"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center opacity-70 text-sm">
        Built with 🍞 Bun + React + Tailwind
      </div>
    </div>
  );
}
