import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/demo');
        const data = await response.text();
        setServerData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch:', error);
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="p-8 text-center">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            🚀 Bun Fullstack Magic
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Seamlessly connecting server and client in one blazing-fast runtime
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
              <div className="space-y-3">
                <div className="bg-blue-100 p-3 rounded-lg flex items-center">
                  <span className="mr-3">🌐</span>
                  <span>React Component</span>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg flex items-center">
                  <span className="mr-3">⚡</span>
                  <span>TypeScript</span>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg flex items-center">
                  <span className="mr-3">💨</span>
                  <span>Tailwind Styles</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 shadow-md transform transition-all hover:scale-105 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Server Side</h2>
              <div className="space-y-3">
                {loading ? (
                  <div className="animate-pulse bg-green-100 p-3 rounded-lg">
                    Loading server data...
                  </div>
                ) : (
                  <div className="bg-green-100 p-3 rounded-lg">
                    {serverData || 'No server data'}
                  </div>
                )}
                <div className="bg-green-100 p-3 rounded-lg flex items-center">
                  <span className="mr-3">🔧</span>
                  <span>Bun HTTP Server</span>
                </div>
                <div className="bg-green-100 p-3 rounded-lg flex items-center">
                  <span className="mr-3">📦</span>
                  <span>Instant Bundling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        Built with ❤️ using Bun, React & TypeScript
      </div>
    </div>
  );
}
