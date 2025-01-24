import { useState } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [count, setCount] = useState(0);

  const fetchServerData = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    setServerData(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
          >
            Client Clicks: {count}
          </button>
          
          <button 
            onClick={fetchServerData}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
          >
            Fetch Server Data
          </button>
        </div>

        <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
          <p className="text-white font-medium text-center">
            Server Response: 
            <span className="ml-2 text-green-300 animate-pulse">
              {serverData.message}
            </span>
          </p>
        </div>
      </div>

      <div className="text-white text-sm opacity-70 text-center max-w-md">
        Built with Bun 🥟 - Seamlessly connecting client and server with TypeScript, React, and Tailwind magic!
      </div>
    </div>
  );
}
