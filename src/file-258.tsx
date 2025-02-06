import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<any>(null);
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-white text-center mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Server Data</h2>
            {serverData ? (
              <pre className="text-sm text-white/80 break-words">
                {JSON.stringify(serverData, null, 2)}
              </pre>
            ) : (
              <div className="animate-pulse text-white/60">Loading...</div>
            )}
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Client Counter</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-6xl font-mono text-white">{clientCounter}</div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setClientCounter(c => c + 1)}
                  className="bg-green-500/50 hover:bg-green-500/70 text-white px-4 py-2 rounded-lg transition-all active:scale-95"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setClientCounter(0)}
                  className="bg-red-500/50 hover:bg-red-500/70 text-white px-4 py-2 rounded-lg transition-all active:scale-95"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-white/50 text-sm text-center max-w-xl">
        Built with Bun 🚀 - Seamlessly combining TypeScript, React, and full-stack simplicity
      </div>
    </div>
  );
}
