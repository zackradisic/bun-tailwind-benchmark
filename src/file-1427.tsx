import React, { useState } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string } | null>(null);

  const fetchServerData = async () => {
    try {
      const response = await fetch('/api/bun-demo');
      const data = await response.json();
      setServerData(data);
    } catch (error) {
      console.error('Server fetch failed', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Client Side</h2>
            <p className="text-gray-700 mb-4">
              React component built with TypeScript and styled with Tailwind CSS
            </p>
            <button 
              onClick={fetchServerData}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-all"
            >
              Fetch Server Data
            </button>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-xl font-bold text-purple-700 mb-4">Server Side</h2>
            {serverData ? (
              <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                <p className="font-semibold text-green-800">{serverData.message}</p>
              </div>
            ) : (
              <p className="text-gray-600">No server data yet</p>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <code className="bg-gray-100 px-4 py-2 rounded-full text-sm font-mono">
            bun run fullstack.tsx
          </code>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center">
        Built with 🚀 Bun, React, TypeScript & Tailwind
      </div>
    </div>
  );
}
