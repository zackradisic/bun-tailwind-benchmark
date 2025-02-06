import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Bun Fullstack Demo
            </h1>
            <p className="mt-2 text-gray-400">Built with Bun + React + TypeScript</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
                <span className="text-purple-400">Server Running</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Server-side Features</h2>
            <ul className="space-y-3">
              {['Built-in bundler', 'HTTP server', 'File system routing', 'API endpoints'].map(feature => (
                <li key={feature} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-pink-400">Client-side Features</h2>
            <div className="space-y-4">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-3/4"/>
                <div className="space-y-3 mt-4">
                  <div className="h-4 bg-gray-700 rounded"/>
                  <div className="h-4 bg-gray-700 rounded w-5/6"/>
                </div>
              </div>

              {loading ? (
                <div className="flex items-center justify-center h-20">
                  <div className="w-8 h-8 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"/>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center gap-2 text-gray-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                        {user.name[0]}
                      </div>
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
