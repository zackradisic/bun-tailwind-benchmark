import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [apiResponse, setApiResponse] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/speed')
      .then(res => res.text())
      .then(data => {
        setApiResponse(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-center">
            Bun Fullstack App
          </h1>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                <code className="font-mono text-sm">Bun.serve()</code>
              </div>
              <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                Running
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <pre className="font-mono text-sm overflow-x-auto">
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin h-4 w-4 border-2 border-white/20 border-t-white rounded-full"></div>
                      <span>Fetching from API...</span>
                    </div>
                  ) : (
                    apiResponse
                  )}
                </pre>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Server Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Built-in TypeScript support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Hot reloading</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>SQLite integration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Client Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>React + TypeScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Automatic bundling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
