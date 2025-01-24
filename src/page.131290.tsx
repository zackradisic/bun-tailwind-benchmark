import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [counter, setCounter] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl text-center transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex flex-col space-y-6">
          <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Server Response
            </h2>
            <p className="text-xl text-blue-600 font-mono">
              {serverData.message}
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <button 
              onClick={() => setCounter(counter + 1)}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform active:scale-95 transition-all duration-200"
            >
              Increment: {counter}
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 italic">
        Built with 🥄 Bun + React + TypeScript + Tailwind
      </div>
    </div>
  );
};

export default BunFullstackDemo;
