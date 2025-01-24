import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string, timestamp: string }>({ message: '', timestamp: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/bun-demo');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <div className="space-y-2">
              <p className="text-blue-600 font-medium">React Component</p>
              <div className="bg-blue-100 p-2 rounded-md">
                <code className="text-sm text-blue-800">TypeScript & React</code>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-purple-200 rounded"></div>
                  <div className="h-4 bg-purple-200 rounded w-5/6"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-purple-600 font-medium">Server Response:</p>
                <div className="bg-purple-100 p-2 rounded-md">
                  <code className="text-sm text-purple-800">{serverData.message}</code>
                </div>
                <div className="text-xs text-purple-500">
                  Timestamp: {serverData.timestamp}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray-700">
            Built with 🚀 Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center">
        Fullstack development made incredibly simple and fast!
      </div>
    </div>
  );
}
