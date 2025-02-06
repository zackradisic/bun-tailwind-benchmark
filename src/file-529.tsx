import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackshowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchServerData() {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    }
    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-12 text-center transform transition-all duration-300 hover:scale-105">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="bg-white/10 rounded-xl p-6 mb-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
          <p className="text-xl text-blue-100 font-mono">{serverData.message}</p>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg"
          >
            Clicks: {count}
          </button>
        </div>
      </div>
      
      <div className="text-center text-white/70 max-w-xl">
        <p className="italic text-sm">
          Built with Bun 🥟 - Seamlessly connecting server and client in one beautiful, type-safe experience
        </p>
      </div>
    </div>
  );
}

// Optional client-side rendering for standalone usage
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackshowcase />);
}
