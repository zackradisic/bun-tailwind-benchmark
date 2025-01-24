import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackShowcase: React.FC = () => {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [clientCount, setClientCount] = useState<number>(0);

  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const response = await fetch('/api/time');
        const data = await response.json();
        setServerTime(data.time);
      } catch (error) {
        setServerTime('Error fetching time');
      }
    };

    fetchServerTime();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server-Side</h2>
            <p className="text-gray-700">Server Time: 
              <span className="font-mono text-green-600 ml-2">{serverTime}</span>
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client-Side</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCount(prev => prev + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-purple-800">{clientCount}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <p className="text-gray-800 font-medium">
            Built with 
            <span className="mx-2 font-bold text-blue-600">Bun</span> 
            • 
            <span className="mx-2 font-bold text-purple-600">React</span> 
            • 
            <span className="mx-2 font-bold text-green-600">TypeScript</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
