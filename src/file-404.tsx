import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/bun-demo');
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
    const interval = setInterval(fetchServerData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 max-w-2xl w-full transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-300/30 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">Client Side</h2>
            <ul className="space-y-2 text-blue-100">
              <li>🚀 React with TypeScript</li>
              <li>🎨 Tailwind Styling</li>
              <li>⚡ Dynamic Rendering</li>
            </ul>
          </div>
          
          <div className="bg-green-500/20 rounded-xl p-6 border border-green-300/30 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-green-200 mb-4">Server Side</h2>
            <div className="text-green-100 space-y-2">
              <p>📡 Endpoint: /api/bun-demo</p>
              <p>⏱️ Last Updated: 
                <span className="font-mono ml-2 text-sm">
                  {serverData.timestamp || 'Connecting...'}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/5 rounded-xl p-4 text-center">
          <p className="text-xl font-semibold text-white/80 animate-pulse">
            {serverData.message}
          </p>
        </div>
      </div>

      <div className="text-center text-white/50 text-sm flex items-center space-x-2 justify-center">
        <span>🍞 Powered by Bun</span>
        <div className="h-4 w-px bg-white/30"></div>
        <span>⚛️ React</span>
        <div className="h-4 w-px bg-white/30"></div>
        <span>🎨 Tailwind</span>
      </div>
    </div>
  );
}
