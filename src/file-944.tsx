import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-gray-700">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-400">Server Features</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Built-in HTTP Server</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>TypeScript Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Hot Reloading</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-pink-400">Client Features</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>React + TypeScript</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Fast Bundling</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-900/50 rounded-lg">
            <h3 className="text-lg font-medium mb-4">API Response:</h3>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ) : error ? (
              <div className="text-red-400">{error}</div>
            ) : (
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify(users, null, 2)}
              </pre>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Built with Bun {process.versions.bun} 🥟
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
