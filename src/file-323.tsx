import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Failed to fetch' });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            <p className="text-lg text-blue-900 font-medium">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client State</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-purple-900">{clientCounter}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <code className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-mono">
            Built with Bun, React, TypeScript & Tailwind
          </code>
        </div>
      </div>
      
      <div className="opacity-50 text-sm text-gray-600">
        Fast. Simple. Powerful.
      </div>
    </div>
  );
}
