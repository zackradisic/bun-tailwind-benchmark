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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <img src="/bun.svg" alt="Bun logo" className="w-12 h-12 animate-bounce" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Bun Fullstack Demo
              </h1>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Server-side Features</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Built-in bundler
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> TypeScript support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> Hot reloading
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">User Data from API</h2>
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  </div>
                ) : (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.map(user => (
                      <li key={user.id} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-white">
                            {user.name[0]}
                          </div>
                          <span className="text-gray-200">{user.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                Built with Bun + React + TypeScript + Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
