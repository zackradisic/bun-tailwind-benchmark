import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setServerData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl p-8 transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Data</h2>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {serverData.map((item, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-2 rounded-lg text-sm text-gray-700 shadow-sm hover:bg-blue-100 transition-colors"
                  >
                    {JSON.stringify(item)}
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Interactions</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCounter(counter - 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors active:scale-95"
              >
                -
              </button>
              <span className="text-3xl font-bold text-purple-700">{counter}</span>
              <button 
                onClick={() => setCounter(counter + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors active:scale-95"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center bg-gray-100 p-4 rounded-xl">
          <p className="text-sm text-gray-600 italic">
            Built with 🚀 Bun, React & TypeScript - Fullstack Simplicity
          </p>
        </div>
      </div>
    </div>
  );
}
