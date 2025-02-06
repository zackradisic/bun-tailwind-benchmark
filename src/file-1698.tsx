import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack Demo
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-500 font-mono">Server Active</span>
          </div>
        </div>

        <div className="mt-12 bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-500/20 rounded-lg p-3">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Lightning Fast Server</h2>
              <p className="text-gray-400">Built with Bun.serve()</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-purple-500 border-t-transparent rounded-full"></div>
                  <span>Fetching data...</span>
                </div>
              ) : (
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(data, null, 2)}
                </pre>
              )}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/30 rounded-lg p-4 hover:bg-gray-900/50 transition">
              <h3 className="font-semibold text-purple-400">Backend Features</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Built-in TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Fast HTTP server
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> File-based routing
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-4 hover:bg-gray-900/50 transition">
              <h3 className="font-semibold text-pink-400">Frontend Features</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> React with TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Automatic bundling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Dev mode with hot reload
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Powered by Bun {process.versions.bun}
        </div>
      </div>
    </div>
  );
}
