import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/bun-info');
        const data = await response.json();
        setServerData(data.message);
        setLoading(false);
      } catch (error) {
        setServerData('Failed to fetch server data');
        setLoading(false);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="p-8 text-center">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 font-bold">🚀 Framework:</span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-700">React + TypeScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 font-bold">💨 Styling:</span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-700">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
              <div className="space-y-4">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-6 bg-purple-200 rounded w-3/4"></div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 font-bold">🌐 Response:</span>
                    <span className="bg-purple-100 px-3 py-1 rounded-full text-purple-700">
                      {serverData || 'No data'}
                    </span>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <span className="text-purple-500 font-bold">⚡ Runtime:</span>
                  <span className="bg-purple-100 px-3 py-1 rounded-full text-purple-700">Bun.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-lg">
              Build Fullstack Apps in Seconds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
