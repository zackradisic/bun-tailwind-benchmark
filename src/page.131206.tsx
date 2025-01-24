import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Initializing...',
    timestamp: new Date().toISOString()
  });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ 
          message: 'Error fetching server data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-12">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            <p className="text-gray-700 font-mono">
              Message: {serverData.message}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Timestamp: {serverData.timestamp}
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Interaction</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Click Me
              </button>
              <span className="text-3xl font-bold text-purple-800">
                {clientCounter}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-600 text-sm opacity-70">
        Built with Bun 🥟 - Blazing Fast Fullstack Development
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
