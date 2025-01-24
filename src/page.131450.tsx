import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl">
        <div className="p-8 space-y-6">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
            Bun Fullstack Simplicity ⚡️
          </h1>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 space-y-4">
              <h2 className="text-2xl font-bold text-blue-700">Client Side</h2>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  React Component with TypeScript
                </p>
                <code className="block bg-gray-100 p-2 rounded text-sm mt-2">
                  const [data, setData] = useState()
                </code>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 space-y-4">
              <h2 className="text-2xl font-bold text-purple-700">Server Side</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4">
                    <div className="h-4 bg-purple-200 rounded"></div>
                    <div className="h-4 bg-purple-200 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <pre className="text-xs text-gray-700 overflow-x-auto">
                    {JSON.stringify(serverData, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
              <span className="text-green-600 font-bold">Bun Performance</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
