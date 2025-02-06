import "./style.css";
import { useState, useEffect } from 'react';

export default function BunDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-purple-500 animate-pulse" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-purple-400">Server Side</h2>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <pre className="text-sm text-gray-300 font-mono">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")) {
      return Response.json(await Bun.sql\`
        SELECT * FROM users
      \`);
    }
  }
})`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-pink-400">Client Side</h2>
              <div className="bg-gray-900/50 rounded-lg p-4 relative">
                {loading && (
                  <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                    <div className="animate-spin h-8 w-8 border-4 border-purple-500 border-t-transparent rounded-full" />
                  </div>
                )}
                {error ? (
                  <p className="text-red-400">{error}</p>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center space-x-2">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        <span>{user.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Built with 
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-bold mx-1">
                Bun + React + TypeScript + Tailwind
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
