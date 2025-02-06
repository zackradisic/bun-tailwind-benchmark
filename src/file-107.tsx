import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(err => setServerData({ 
        message: 'Server Error', 
        timestamp: new Date().toISOString() 
      }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🌐 Server Side</h2>
            <p className="text-gray-700 font-medium">
              Message: <span className="text-indigo-600">{serverData.message}</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Timestamp: {serverData.timestamp}
            </p>
          </div>
          
          <div className="bg-indigo-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">💻 Client Side</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCount(prev => prev + 1)}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-indigo-700 transition-all"
              >
                Click Me
              </button>
              <span className="text-3xl font-bold text-indigo-600">
                {clientCount}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with 💖 using Bun, React & TypeScript
          </p>
        </div>
      </div>
      
      <div className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 text-sm text-gray-600 shadow-lg">
        Bun: Simplifying Fullstack Development
      </div>
    </div>
  );
}
