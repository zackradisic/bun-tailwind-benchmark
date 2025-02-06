import "./style.css";
import React, { useState } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<string | null>(null);

  const fetchDataFromBun = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.text();
      setServerData(data);
    } catch (error) {
      setServerData('Error fetching data');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-2xl w-full transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <p className="text-gray-600 mb-4">React with TypeScript & Tailwind</p>
            <button 
              onClick={fetchDataFromBun}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-md"
            >
              Fetch Server Data
            </button>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            <p className="text-gray-600 mb-4">Bun HTTP Server with API Endpoint</p>
            {serverData && (
              <div className="bg-purple-100 p-4 rounded-lg text-center">
                <span className="font-mono text-purple-800">{serverData}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 italic opacity-70">
        Built with Bun, React, TypeScript, and Tailwind
      </div>
    </div>
  );
}
