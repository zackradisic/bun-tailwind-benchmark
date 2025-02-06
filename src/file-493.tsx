import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverMessage, setServerMessage] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (error) {
        setServerMessage('Failed to fetch');
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center space-y-8 p-6 font-sans">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex flex-col space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg animate-pulse">
            <h2 className="font-bold text-blue-800">Server Message:</h2>
            <p className="text-gray-700">{serverMessage || 'Loading...'}</p>
          </div>

          <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg shadow-inner">
            <span className="text-lg font-semibold text-purple-800">Counter:</span>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCounter(c => c - 1)}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-2xl font-bold text-purple-700">{counter}</span>
              <button 
                onClick={() => setCounter(c => c + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-4 opacity-70">
        Built with 🦊 Bun, ⚛️ React, and 💨 Tailwind
      </div>
    </div>
  );
}
