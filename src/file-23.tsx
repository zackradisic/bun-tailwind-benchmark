import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverMessage, setServerMessage] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };
    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="bg-blue-500/50 rounded-full p-4 text-white text-2xl font-bold">
            Client Count: {count}
          </div>
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            Increment
          </button>
        </div>
        <div className="bg-white/10 rounded-xl p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Server Response</h2>
          <p className="text-lg italic">
            {serverMessage || 'Fetching server data...'}
          </p>
        </div>
      </div>
      <div className="text-white text-sm opacity-70 text-center max-w-md">
        This demo showcases Bun's incredible fullstack capabilities with seamless 
        server-side rendering, client-side interactivity, and modern React 
        development using TypeScript and Tailwind CSS.
      </div>
    </div>
  );
}
