import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        setServerData({ message: 'Error fetching data' });
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center space-y-8 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full bg-gray-100 p-4 rounded-xl shadow-inner text-center">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Server Response</h2>
            <p className="text-lg text-blue-600 font-semibold">{serverData.message}</p>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCounter(counter - 1)}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors font-bold"
            >
              -
            </button>
            <span className="text-2xl font-bold text-gray-800">Counter: {counter}</span>
            <button 
              onClick={() => setCounter(counter + 1)}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors font-bold"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center">
        <p>Built with 🚀 Bun, React & TypeScript</p>
        <p className="mt-1 opacity-75">Fast. Simple. Powerful.</p>
      </div>
    </div>
  );
}

// For client-side rendering
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackDemo />);
}
