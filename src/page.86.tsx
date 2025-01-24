import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-8">
            Bun Fullstack React 🚀
          </h1>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Server-side</h2>
              <pre className="font-mono text-sm bg-black/20 p-4 rounded">
                {`Bun.serve({
  static: {
    "/": html
  },
  fetch: async (req) => {
    if(req.url.includes("/api"))
      return Response.json(data);
  }
})`}
              </pre>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-pink-400">Client-side</h2>
              <pre className="font-mono text-sm bg-black/20 p-4 rounded">
                {`import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
  .render(<App />);`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Live Data:</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ) : error ? (
              <div className="text-red-400">{error}</div>
            ) : (
              <ul className="space-y-2">
                {data.map((item, i) => (
                  <li key={i} className="bg-gray-800/40 p-3 rounded flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-8 text-center text-gray-400">
            <p className="text-sm">Built with Bun, React, TypeScript & Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
