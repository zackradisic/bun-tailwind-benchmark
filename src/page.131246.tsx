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
          message: 'Error fetching data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Response</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm">
              <code>
                {JSON.stringify(serverData, null, 2)}
              </code>
            </pre>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md flex flex-col items-center">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client State</h2>
            <div className="text-6xl font-black text-purple-600 mb-4">
              {clientCounter}
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Increment
              </button>
              <button 
                onClick={() => setClientCounter(0)}
                className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full hover:bg-purple-300 transition-colors"
              >
                Reset
              </button>
            </div>
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
}
