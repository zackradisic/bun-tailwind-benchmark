import "./style.css";
import React, { useState } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string } | null>(null);

  const fetchServerData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setServerData(data);
    } catch (error) {
      console.error('Error fetching server data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 space-y-4">
            <h2 className="text-2xl font-bold text-white">Client Side</h2>
            <p className="text-white/80">React + TypeScript</p>
            <button 
              onClick={fetchServerData}
              className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              Fetch Server Data
            </button>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 space-y-4">
            <h2 className="text-2xl font-bold text-white">Server Side</h2>
            <p className="text-white/80">Bun HTTP Server</p>
            {serverData && (
              <div className="bg-white/20 p-4 rounded-lg">
                <pre className="text-white text-sm">{JSON.stringify(serverData, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm flex flex-col items-center space-y-2">
        <p className="animate-pulse">⚡ Powered by Bun</p>
        <div className="flex space-x-2">
          <span>🚀 React</span>
          <span>🌐 TypeScript</span>
          <span>💨 Tailwind</span>
        </div>
      </div>
    </div>
  );
}
