import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="bg-white/10 rounded-xl p-6 mb-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-4">Server Response</h2>
          <p className="text-white/80 font-medium text-lg">
            {serverData.message}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button 
            onClick={() => setCount(count + 1)}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold 
            hover:bg-indigo-700 transition-all duration-300 transform active:scale-95 
            shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Clicked {count} times
          </button>
        </div>
      </div>

      <div className="text-center text-white/70 max-w-md text-sm">
        <p className="mb-2">
          Built with 🚀 Bun, React, TypeScript & Tailwind
        </p>
        <div className="flex justify-center space-x-2 opacity-50">
          <span>⚡ Ultra-Fast</span>
          <span>•</span>
          <span>🌈 Seamless Fullstack</span>
        </div>
      </div>
    </div>
  );
}
