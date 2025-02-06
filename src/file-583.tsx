import "./style.css";
import { useState, useEffect } from 'react';

export default function BunDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-8 shadow-xl border border-gray-700">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-purple-400">Server-side Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Built-in SQLite Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Static File Serving</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>TypeScript Native</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-pink-400">Client-side Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Hot Reload Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>React + TypeScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Tailwind Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-purple-400">API Demo - Users</h2>
              <button 
                onClick={fetchUsers}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
              >
                Refresh
              </button>
            </div>

            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin h-8 w-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
              </div>
            ) : (
              <div className="divide-y divide-gray-700">
                {users.map(user => (
                  <div key={user.id} className="py-3 flex justify-between">
                    <span>{user.name}</span>
                    <span className="text-gray-400">ID: {user.id}</span>
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
