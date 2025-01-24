import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });

    const interval = setInterval(() => {
      fetch('/api/time').then(res => res.text()).then(setServerTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 rounded-lg backdrop-blur-lg border border-white/10 p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Bun Fullstack Demo
            </h1>
            <div className="text-sm font-mono bg-black/50 px-4 py-2 rounded-full">
              Server Time: {serverTime}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-300">Server Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  Built-in HTTP Server
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  SQLite Database
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  Static File Serving
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  Hot Reloading
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-300">Client Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  React + TypeScript
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  Fast Bundling
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
                  Source Maps
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-black/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Users from Database:</h3>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="h-4 bg-purple-500/20 rounded w-1/4"></div>
                <div className="h-4 bg-purple-500/20 rounded w-1/4"></div>
                <div className="h-4 bg-purple-500/20 rounded w-1/4"></div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {users.map(user => (
                  <div key={user.id} className="bg-white/5 rounded p-3 hover:bg-white/10 transition-colors">
                    <span className="text-sm font-mono text-purple-300">#{user.id}</span>
                    <p className="font-medium">{user.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
