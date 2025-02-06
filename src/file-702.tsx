import "./style.css";
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8 antialiased">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6 tracking-tight">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-xl p-4 border border-white/5 hover:bg-white/20 transition-all">
            <h2 className="text-xl font-bold text-white mb-2">Client Side</h2>
            <p className="text-white/80">React Component with dynamic state</p>
            <div className="mt-2 text-sm text-blue-200">
              useState & useEffect in action
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 border border-white/5 hover:bg-white/20 transition-all">
            <h2 className="text-xl font-bold text-white mb-2">Server Side</h2>
            <p className="text-white/80">API Response:</p>
            <code className="block mt-2 text-sm bg-black/20 text-green-300 p-2 rounded">
              {JSON.stringify(serverData, null, 2)}
            </code>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-all transform active:scale-95"
            onClick={() => window.location.reload()}
          >
            Reload Data
          </button>
        </div>
      </div>
      
      <div className="text-white/50 text-sm text-center">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
}
