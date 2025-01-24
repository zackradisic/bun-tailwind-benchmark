import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setServerData(data))
      .catch(error => setServerData({ message: 'Error fetching data' }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-10 text-white font-sans">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8 text-center">
          <div className="bg-white/10 rounded-xl p-6 space-y-4 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-bold text-blue-200">Server Response</h2>
            <p className="text-xl font-medium text-blue-100">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 space-y-4 hover:bg-white/20 transition-all">
            <h2 className="text-2xl font-bold text-green-200">Client State</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold text-green-100">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm opacity-70">
            Built with 🥟 Bun, React, and Tailwind
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 text-xs text-white/50 italic">
        Full-stack magic in just a few lines of code!
      </div>
    </div>
  );
}
