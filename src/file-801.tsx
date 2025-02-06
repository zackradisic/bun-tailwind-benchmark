import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string } | null>(null);
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          🚀 Bun Fullstack Showcase
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            {serverData ? (
              <p className="text-blue-900 font-semibold animate-pulse">
                {serverData.message}
              </p>
            ) : (
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full mx-auto"></div>
            )}
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client State</h2>
            <div className="flex items-center justify-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold text-purple-900">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-500 italic">
          Built with Bun, React, TypeScript & Tailwind ✨
        </div>
      </div>
    </div>
  );
}
