import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-2xl font-bold">🚀</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-purple-300">Server-side Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Built-in HTTP server with Bun.serve()
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Automatic bundling of frontend assets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  TypeScript & JSX support out of the box
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-pink-300">Client Data</h2>
              {isLoading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : error ? (
                <div className="text-red-400">{error}</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {users.map((user, i) => (
                    <div key={i} className="bg-gray-900/50 p-4 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors">
                      {user}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-blue-300">Performance Metrics</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-400">~3x</div>
                  <div className="text-sm text-gray-400">Faster than Node.js</div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400">0</div>
                  <div className="text-sm text-gray-400">Config Files</div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-400">1</div>
                  <div className="text-sm text-gray-400">Command to Run</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
