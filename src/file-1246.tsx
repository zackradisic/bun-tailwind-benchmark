import "./style.css";
import React, { useState } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string } | null>(null);

  const fetchServerData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setServerData(data);
    } catch (error) {
      console.error('Failed to fetch server data', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <p className="text-gray-600 mb-4">
              React component built with TypeScript and Tailwind
            </p>
            <button 
              onClick={fetchServerData}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Fetch Server Data
            </button>
          </div>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            {serverData ? (
              <div className="text-gray-700 bg-purple-100 p-4 rounded-lg">
                <p className="font-medium">{serverData.message}</p>
              </div>
            ) : (
              <p className="text-gray-500">Click to load server response</p>
            )}
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm flex items-center space-x-2 justify-center">
        <span>🚀 Built with</span>
        <span className="font-bold text-blue-600">Bun</span>
        <span>+</span>
        <span className="font-bold text-teal-600">React</span>
        <span>+</span>
        <span className="font-bold text-pink-600">TypeScript</span>
      </div>
    </div>
  );
}
