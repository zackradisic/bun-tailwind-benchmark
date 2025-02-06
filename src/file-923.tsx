import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/bun-speed');
        const data = await response.json();
        setServerData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch server data', error);
        setLoading(false);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="p-8 space-y-6">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center">
            Bun: Blazing Fast Fullstack
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">🚀 Client Side</h2>
              <p className="text-gray-700">
                React component rendering with seamless state management and responsive design.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">⚡ Server Side</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-purple-300 rounded w-3/4"></div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700">{serverData?.message}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Timestamp: {serverData?.timestamp}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 text-center">
          <code className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-mono">
            bun run fullstack.tsx
          </code>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
        <span>✨ Built with Bun</span>
        <span className="text-xl">•</span>
        <span>React</span>
        <span className="text-xl">•</span>
        <span>TypeScript</span>
      </div>
    </div>
  );
}
