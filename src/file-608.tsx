import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Initializing...',
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Bun Fullstack Magic ✨
            </h1>
            <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold">
              v1.0
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-xl border-2 border-blue-200">
              <h2 className="text-xl font-bold text-blue-700 mb-3">🚀 Client</h2>
              <div className="space-y-2">
                <p className="text-gray-600">React Component</p>
                <div className="bg-blue-100 px-3 py-2 rounded-lg">
                  <code className="text-sm text-blue-800">TypeScript + React</code>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-xl border-2 border-purple-200">
              <h2 className="text-xl font-bold text-purple-700 mb-3">⚡ Server</h2>
              <div className="space-y-2">
                <p className="text-gray-600">Bun HTTP Server</p>
                <div className="bg-purple-100 px-3 py-2 rounded-lg">
                  <code className="text-sm text-purple-800">Bun.serve()</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Server Response</h3>
            <div className="flex items-center space-x-4">
              <div className={`w-4 h-4 rounded-full animate-pulse ${serverData.message === 'Error fetching data' ? 'bg-red-500' : 'bg-green-500'}`}></div>
              <div>
                <p className={`font-medium ${serverData.message === 'Error fetching data' ? 'text-red-600' : 'text-green-700'}`}>
                  {serverData.message}
                </p>
                {serverData.timestamp && (
                  <p className="text-xs text-gray-500 mt-1">
                    Received: {new Date(serverData.timestamp).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
