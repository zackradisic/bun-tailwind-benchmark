import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string, timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
        <div className="p-8 text-center">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
              <p className="text-blue-600 font-medium">
                React Component with Typescript
              </p>
              <div className="mt-4 text-sm text-blue-500 italic">
                Powered by React & Tailwind
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
              <p className="text-purple-600 font-medium">
                {serverData.message}
              </p>
              <div className="mt-4 text-sm text-purple-500 italic">
                {serverData.timestamp && `Fetched at: ${new Date(serverData.timestamp).toLocaleString()}`}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-xl shadow-md">
            <code className="text-sm font-mono">
              Bun: TypeScript, React & Server in One ⚡️
            </code>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-sm mt-4">
        Built with 💖 using Bun v1
      </div>
    </div>
  );
}
