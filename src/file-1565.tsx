import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
            <p className="mt-2 text-gray-400">Built with Bun, React & TypeScript</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-sm">Server Running</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg mr-2">🚀</span>
              Server-side Features
            </h2>
            <ul className="space-y-3">
              {["Built-in bundler", "TypeScript support", "File-system routing", "Static file serving"].map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <span className="mr-2 text-green-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-purple-500/20 text-purple-400 p-2 rounded-lg mr-2">⚛️</span>
              Client Data
            </h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-3 bg-gray-700/30 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                        {user.name[0]}
                      </div>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
          <div className="font-mono text-sm text-gray-400">
            <p className="mb-2">// Start your Bun server with:</p>
            <div className="bg-black rounded p-3">
              $ bun run server.ts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
