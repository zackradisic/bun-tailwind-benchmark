import { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-gray-400 text-xl">Lightning fast React apps with zero config</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="bg-green-500/10 text-green-500 p-2 rounded-lg mr-2">🚀</span>
              Server
            </h2>
            <div className="font-mono text-sm bg-black/30 p-4 rounded-lg">
              <p className="text-green-400">Bun.serve({'{'}</p>
              <p className="ml-4 text-purple-400">static: {'{'}</p>
              <p className="ml-8 text-blue-400">"/":{' '}<span className="text-orange-400">homepage</span>,</p>
              <p className="ml-4 text-purple-400">{'}'}</p>
              <p className="ml-4 text-yellow-400">fetch: async (req) => {'{'}</p>
              <p className="ml-8 text-blue-400">// API routes here</p>
              <p className="ml-4 text-yellow-400">{'}'}</p>
              <p className="text-green-400">{'})'}</p>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="bg-blue-500/10 text-blue-500 p-2 rounded-lg mr-2">⚡</span>
              Client
            </h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 bg-gray-700 rounded-lg w-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id}
                      className="bg-gray-700/30 p-3 rounded-lg hover:bg-gray-700/50 transition-colors flex items-center"
                    >
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
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

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Bundle size: <span className="text-green-400 font-mono">~2kb</span> • 
            Load time: <span className="text-green-400 font-mono">~100ms</span>
          </p>
        </div>
      </div>
    </div>
  );
}
