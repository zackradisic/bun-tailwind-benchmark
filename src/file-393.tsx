import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Bun Fullstack Demo
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 font-mono">Server Active</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/20 rounded-lg p-6 border border-white/5">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Server Stats
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-black/30 p-3 rounded-md">
                  <p className="text-gray-400">Response Time</p>
                  <p className="font-mono text-green-400">~1.2ms</p>
                </div>
                <div className="bg-black/30 p-3 rounded-md">
                  <p className="text-gray-400">Memory Usage</p>
                  <p className="font-mono text-green-400">13.2MB</p>
                </div>
              </div>
            </div>

            <div className="bg-black/20 rounded-lg p-6 border border-white/5">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                API Response
              </h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-black/30 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-black/30 rounded"></div>
                      <div className="h-4 bg-black/30 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ) : error ? (
                <div className="text-red-400 bg-red-400/10 p-4 rounded-md">
                  {error}
                </div>
              ) : (
                <pre className="bg-black/30 p-4 rounded-md overflow-auto text-sm font-mono text-green-400">
                  {JSON.stringify(data, null, 2)}
                </pre>
              )}
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p className="flex items-center justify-center gap-2">
              Powered by
              <span className="font-semibold text-purple-400">Bun</span>
              <span className="text-xs bg-purple-400/20 text-purple-400 px-2 py-1 rounded-full">v1.1.44+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
