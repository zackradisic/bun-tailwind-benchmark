import "./style.css";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack Magic ✨
          </h1>
          <p className="mt-4 text-gray-400 text-lg">Lightning fast fullstack apps with zero config</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server-Side</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-gray-300 font-mono">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/data")) {
      return Response.json(["Bun", "is", "fast"])
    }
  }
})`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client-Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 bg-red-900/20 rounded-lg p-4">{error}</div>
              ) : (
                <div className="bg-gray-900 rounded-lg p-4">
                  <ul className="space-y-2">
                    {data.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="h-2 w-2 bg-pink-500 rounded-full"></span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-full font-medium">
            <span>🚀</span>
            <span>Built with Bun</span>
          </div>
        </div>
      </div>
    </div>
  );
}
