import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            <p className="text-lg text-gray-700 font-semibold">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Counter</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev - 1)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold text-gray-800">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl">
          <p className="text-xl font-medium">
            Built with Bun: Blazing Fast Fullstack Development 🚀
          </p>
          <p className="text-sm mt-2 opacity-80">
            React + TypeScript + Tailwind = ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
