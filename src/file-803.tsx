import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl text-center transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-inner w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Response</h2>
            <p className="text-xl text-blue-600 font-semibold animate-pulse">
              {serverData.message}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCounter(counter - 1)}
              className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all transform active:scale-95 shadow-md"
            >
              - Decrement
            </button>
            
            <div className="text-4xl font-bold text-gray-800 w-20 text-center">
              {counter}
            </div>
            
            <button 
              onClick={() => setCounter(counter + 1)}
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all transform active:scale-95 shadow-md"
            >
              + Increment
            </button>
          </div>
        </div>
      </div>

      <footer className="text-sm text-gray-600 text-center opacity-70">
        Built with 🚀 Bun, React & TypeScript
      </footer>
    </div>
  );
}
