import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="bg-gray-50 border-2 border-dashed border-blue-200 rounded-xl p-4 mb-6">
          <h2 className="text-xl font-bold text-blue-700 mb-3">Server Response</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-600">Message:</span> {serverData.message}
            </p>
            <p className="text-xs text-gray-500">
              Fetched at: {serverData.timestamp || 'Not available'}
            </p>
          </div>
        </div>

        <div className="bg-purple-50 border-2 border-dashed border-purple-200 rounded-xl p-4">
          <h2 className="text-xl font-bold text-purple-700 mb-3">Client Interaction</h2>
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setClientCounter(prev => prev + 1)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors shadow-md"
            >
              Increment
            </button>
            <span className="text-2xl font-bold text-purple-800">
              Count: {clientCounter}
            </span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 opacity-70">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
}
