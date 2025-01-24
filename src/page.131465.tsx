import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight animate-pulse">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-white/30 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">🌐 Server Response</h2>
            <p className="text-xl text-white font-semibold">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-white/30 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">💻 Client State</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCount(count => count + 1)}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all active:scale-95"
              >
                Increment
              </button>
              <span className="text-3xl font-bold text-white">
                {clientCount}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-white text-sm opacity-70 text-center">
        Built with 🍞 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackDemo;
