import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/demo');
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-400/30">
            <h2 className="text-xl font-bold text-blue-200 mb-2">Client Side</h2>
            <p className="text-blue-100">
              React + TypeScript with elegant Tailwind styling
            </p>
          </div>
          
          <div className="bg-green-500/20 rounded-xl p-4 border border-green-400/30">
            <h2 className="text-xl font-bold text-green-200 mb-2">Server Side</h2>
            <p className="text-green-100">
              Bun's lightning-fast runtime powering backend
            </p>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-2xl font-semibold text-white mb-4">Server Response</h3>
          <div className="space-y-2">
            <p className="text-lg text-blue-200">
              Message: <span className="font-bold text-white">{serverData.message}</span>
            </p>
            <p className="text-sm text-gray-400">
              Timestamp: {serverData.timestamp}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 flex space-x-4">
        <div className="bg-black/20 px-4 py-2 rounded-full">
          🚀 React
        </div>
        <div className="bg-black/20 px-4 py-2 rounded-full">
          ⚡ Bun
        </div>
        <div className="bg-black/20 px-4 py-2 rounded-full">
          🎨 Tailwind
        </div>
      </div>
    </div>
  );
}
