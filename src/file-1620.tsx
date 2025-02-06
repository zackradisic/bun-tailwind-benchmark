import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' });
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            <p className="text-gray-700 font-mono bg-blue-50 p-3 rounded-md">
              {serverData.message}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border-2 border-green-100 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Client State</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-3xl font-bold text-green-800">
                {clientCounter}
              </span>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-500">
          <p className="text-sm">Built with 🚀 Bun, React & TypeScript</p>
        </footer>
      </div>
    </div>
  );
}

// Client-side rendering
document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackShowcase />);
});
