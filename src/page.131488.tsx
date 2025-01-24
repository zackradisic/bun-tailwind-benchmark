import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{message: string}>({ message: 'Loading...' });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="bg-white/30 rounded-full px-6 py-3 shadow-md">
            <p className="text-2xl font-bold text-gray-800">
              Server Response: {serverData.message}
            </p>
          </div>
          
          <button 
            onClick={() => setCounter(counter + 1)}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all hover:scale-110 active:scale-95"
          >
            Counter: {counter}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-left transform transition-all hover:scale-105 hover:bg-white/20">
            <h2 className="text-3xl font-bold text-blue-300 mb-4">🚀 Client Side</h2>
            <p className="text-white/80">
              Interactive React component with state management and dynamic interactions
            </p>
          </div>
          
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-left transform transition-all hover:scale-105 hover:bg-white/20">
            <h2 className="text-3xl font-bold text-green-300 mb-4">💻 Server Side</h2>
            <p className="text-white/80">
              Bun server handling API requests with TypeScript and built-in optimizations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
