import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <img src="https://bun.sh/logo.svg" className="w-12 h-12 animate-spin-slow" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-pink-400">Server Features</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Built-in HTTP server with Bun.serve()
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 
                  Automatic TypeScript transpilation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Hot module reloading
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-violet-400">Client Features</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  React with TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Automatic bundling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Tailwind CSS integration
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-black/20">
            <h3 className="text-xl font-semibold mb-4 text-pink-300">API Response:</h3>
            {loading ? (
              <div className="animate-pulse text-gray-400">Loading users...</div>
            ) : error ? (
              <div className="text-red-400">Error: {error.message}</div>  
            ) : (
              <pre className="font-mono text-sm overflow-x-auto">
                {JSON.stringify(users, null, 2)}
              </pre>
            )}
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>Run this fullstack app with just one command:</p>
            <code className="bg-black/40 px-4 py-2 rounded-full mt-2 inline-block">
              bun run dev
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
