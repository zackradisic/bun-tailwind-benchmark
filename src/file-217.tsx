import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: '',
    users: []
  });

  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(err => console.error('Server fetch error:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-3xl transform transition-all hover:scale-[1.02] hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Server Side</h2>
            <p className="text-gray-700 mb-4">
              Server Message: 
              <span className="font-mono ml-2 bg-blue-100 px-2 py-1 rounded">
                {serverData.message || 'Loading...'}
              </span>
            </p>
            <div className="bg-blue-100 rounded p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Users:</h3>
              <ul className="space-y-1">
                {serverData.users?.map((user, idx) => (
                  <li key={idx} className="text-sm text-blue-700">
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Client Side</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-6xl font-bold text-green-600">{clientCount}</div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setClientCount(c => c + 1)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setClientCount(0)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Built with 🥟 Bun, React, TypeScript & Tailwind
        </div>
      </div>
    </div>
  );
}
