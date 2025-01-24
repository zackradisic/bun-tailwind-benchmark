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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center space-y-8 p-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">🚀 Server Side</h2>
            <p className="text-gray-700 font-medium">
              Server Response: 
              <span className="ml-2 text-green-600 font-bold">
                {serverData.message}
              </span>
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">💻 Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCount(count => count + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-xl font-bold text-purple-700">
                Count: {clientCount}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Built with Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 text-center">
        Bun makes fullstack development incredibly simple and fast! 🏎️
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
