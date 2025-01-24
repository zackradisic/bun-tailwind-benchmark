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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-xl text-gray-300">Lightning fast React + TypeScript development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-green-400 mr-2">⚡</span> Server Side
            </h2>
            <div className="space-y-3 text-sm">
              <code className="block bg-black/30 p-3 rounded">
                <span className="text-blue-400">Bun.serve</span>({'{'}
                <br />
                &nbsp;&nbsp;<span className="text-purple-400">static:</span> {'{'}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"/"</span>: homepage
                <br />
                &nbsp;&nbsp;{'}'},
                <br />
                &nbsp;&nbsp;<span className="text-purple-400">fetch:</span> <span className="text-yellow-400">async</span> (req) =&gt; {'{'}...{'}'}
                <br />
                {'}'})
              </code>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-blue-400 mr-2">🌐</span> Client Side
            </h2>
            <div className="relative overflow-hidden rounded-lg bg-black/30 p-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded-lg transition">
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

        <div className="mt-12 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 transition">
            Built with Bun {process.version} 🥟
          </span>
        </div>
      </div>
    </div>
  );
}
