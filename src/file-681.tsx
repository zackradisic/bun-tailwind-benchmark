import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{message: string, timestamp: string}>({
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-8 transform transition-all hover:scale-105 hover:shadow-3xl duration-300">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:bg-blue-100 transition-colors">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client</h2>
            <p className="text-blue-800">React + TypeScript</p>
            <p className="text-sm text-blue-600 mt-2">Blazing fast frontend</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:bg-purple-100 transition-colors">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server</h2>
            <p className="text-purple-800">Bun Runtime</p>
            <p className="text-sm text-purple-600 mt-2">Ultrafast backend</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Server Response</h3>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-bold">Message:</span> {serverData.message}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-bold">Timestamp:</span> {serverData.timestamp || 'N/A'}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
        <span>⚡️ Built with</span>
        <span className="font-bold text-blue-600">Bun</span>
        <span>🚀 Simplicity Meets Performance</span>
      </div>
    </div>
  );
}
