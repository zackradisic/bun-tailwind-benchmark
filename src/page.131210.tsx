import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{message: string, timestamp: number}>({
    message: 'Loading...',
    timestamp: Date.now()
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/bun-speed');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({
          message: 'Error fetching data',
          timestamp: Date.now()
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="p-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
          <h1 className="text-4xl font-extrabold tracking-tight text-center animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-blue-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Server Response
            </h2>
            <pre className="text-sm text-gray-600 bg-white p-3 rounded-lg shadow-inner">
              {JSON.stringify(serverData, null, 2)}
            </pre>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-200 hover:bg-green-100 transition-colors">
              <h3 className="font-bold text-green-800">Bun Server</h3>
              <p className="text-green-600">Ultra-fast runtime ⚡</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors">
              <h3 className="font-bold text-blue-800">React Client</h3>
              <p className="text-blue-600">Reactive UI 🚀</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-500">
          Built with 💖 using Bun v{process.version}
        </div>
      </div>
    </div>
  );
}
