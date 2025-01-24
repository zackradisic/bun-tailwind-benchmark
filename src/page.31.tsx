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
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between bg-gray-700/30 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Server-side API with Bun.serve()</span>
              </div>
              <span className="text-gray-400">Built-in</span>
            </div>

            <div className="bg-gray-700/30 p-4 rounded-lg">
              <div className="mb-4 flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </div>
                <span className="font-medium">Users from API</span>
              </div>
              
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-600/50 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-600/50 rounded"></div>
                    <div className="h-4 bg-gray-600/50 rounded w-5/6"></div>
                  </div>
                </div>
              ) : error ? (
                <div className="text-red-400">{error}</div>
              ) : (
                <div className="space-y-2">
                  {users.map(user => (
                    <div key={user.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-600/20">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        {user.name[0]}
                      </div>
                      <span>{user.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between bg-gray-700/30 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium">Zero Config Bundling</span>
              </div>
              <span className="text-gray-400">Built-in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
