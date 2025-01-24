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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack App
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400 font-mono">Server Status: Online</span>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Users from Database</h2>
            <div className="px-4 py-2 bg-purple-600 rounded-lg font-mono text-sm">
              Bun.serve() + React
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {users.map(user => (
                <div key={user.id} className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700/75 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-gray-400 text-sm">ID: {user.id}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Server Features</h3>
            <ul className="space-y-2">
              {['Hot Reloading', 'TypeScript Support', 'SQL Database', 'File Serving'].map(feature => (
                <li key={feature} className="flex items-center gap-2 text-gray-300">
                  <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Client Features</h3>
            <ul className="space-y-2">
              {['React 18', 'Tailwind CSS', 'TypeScript', 'Fast Refresh'].map(feature => (
                <li key={feature} className="flex items-center gap-2 text-gray-300">
                  <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
