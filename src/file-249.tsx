import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCount, setClientCount] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Server Response</h2>
            <p className="text-xl text-white/80 font-medium">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-inner flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4">🖱️ Client Interaction</h2>
            <div className="text-4xl font-extrabold text-white mb-4">
              {clientCount}
            </div>
            <button 
              onClick={() => setClientCount(c => c + 1)}
              className="px-6 py-2 bg-white/20 text-white rounded-full hover:bg-white/40 transition-all active:scale-95"
            >
              Increment
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-white/70 text-sm text-center max-w-xl">
        <p className="animate-bounce">
          Built with Bun 🥟 - Seamlessly combining server-side power and client-side interactivity
        </p>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
