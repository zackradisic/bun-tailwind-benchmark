import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Connecting...',
    timestamp: '',
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
          message: 'Server connection failed', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Playground
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">Message: 
                <span className="text-blue-600 ml-2">{serverData.message}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Timestamp: {serverData.timestamp || 'Loading...'}
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Interaction</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-700 font-medium">
                Clicks: 
                <span className="text-purple-600 ml-2 text-2xl">{clientCount}</span>
              </p>
              <button 
                onClick={() => setClientCount(prev => prev + 1)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all transform active:scale-95"
              >
                Increment
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with ⚡ Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
