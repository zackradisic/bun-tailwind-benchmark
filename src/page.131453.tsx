import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/bun-stats');
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
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            ⚡ Bun Fullstack Magic ⚡
          </h1>
        </div>
        
        <div className="grid grid-cols-2 gap-8 p-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">🚀 Client Side</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-blue-600">React + TypeScript</p>
                <code className="text-sm text-gray-600 block mt-2">
                  Interactive Frontend Components
                </code>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-blue-600">Tailwind Styling</p>
                <code className="text-sm text-gray-600 block mt-2">
                  Rapid UI Development
                </code>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md border border-purple-100">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">💻 Server Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-purple-200 rounded"></div>
                  <div className="h-4 bg-purple-200 rounded w-5/6"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium text-purple-600">Bun Server Data</p>
                  <pre className="text-sm text-gray-600 mt-2">
                    {JSON.stringify(serverData, null, 2)}
                  </pre>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium text-purple-600">API Endpoint</p>
                  <code className="text-sm text-gray-600 block mt-2">
                    /api/bun-stats
                  </code>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-gray-600 font-medium">
            Built with 💖 using Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
