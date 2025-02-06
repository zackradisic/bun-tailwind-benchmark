import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: number }>({ message: '', timestamp: 0 });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            <p className="text-lg font-medium text-gray-700">
              Message: {serverData.message}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Timestamp: {new Date(serverData.timestamp).toLocaleString()}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client State</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-purple-800">
                {clientCounter}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 italic">
        Built with Bun 🚀 React 💻 TypeScript 🧩 Tailwind 🎨
      </div>
    </div>
  );
}
