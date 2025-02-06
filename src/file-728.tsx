import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>({
    message: 'Loading...',
    timestamp: ''
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
          message: 'Error fetching data', 
          timestamp: new Date().toISOString() 
        });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">🌐 Server Response</h2>
            <p className="text-lg font-semibold text-blue-600">{serverData.message}</p>
            <p className="text-sm text-gray-500 mt-2">
              Timestamp: {serverData.timestamp || 'Fetching...'}
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🚀 Client Interaction</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-purple-700">
                Count: {clientCounter}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, and Tailwind - Blazing Fast! 🔥
          </p>
        </div>
      </div>

      <div className="text-center text-gray-600 max-w-xl">
        <p className="text-sm">
          This demo showcases seamless server-client integration with{' '}
          <span className="font-bold text-blue-600">Bun</span>, demonstrating 
          how quickly you can build full-stack applications with modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
