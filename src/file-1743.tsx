import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<{count: number}>({ count: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/count')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
            Bun Fullstack App
          </h1>

          <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-xl font-medium">Server-side Counter:</div>
              
              {loading ? (
                <div className="animate-pulse h-12 w-12 bg-gray-700 rounded-full"/>
              ) : (
                <div className="text-4xl font-bold text-purple-400">
                  {data.count}
                </div>
              )}

              <button
                onClick={async () => {
                  const res = await fetch('/api/increment', {
                    method: 'POST'
                  });
                  const newData = await res.json();
                  setData(newData);
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium 
                          transform transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 
                          focus:ring-purple-500 focus:ring-opacity-50"
              >
                Increment
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Client-side Rendering</h3>
                <p className="text-gray-400">React components with TypeScript</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Server API Routes</h3>
                <p className="text-gray-400">Built-in HTTP server with Bun.serve()</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            Powered by Bun's built-in bundler & HTTP server
          </div>
        </div>
      </div>
    </div>
  );
}
