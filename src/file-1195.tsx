import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string, timestamp: string }>({
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
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            <p className="text-lg text-gray-700 mb-2">
              Message: <span className="font-semibold text-blue-600">{serverData.message}</span>
            </p>
            <p className="text-sm text-gray-500">
              Timestamp: {serverData.timestamp}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Interaction</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-purple-800">
                Count: {clientCounter}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 italic">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
