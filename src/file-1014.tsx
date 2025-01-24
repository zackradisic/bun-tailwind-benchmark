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
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">🥟</span>
            </div>
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Bun Fullstack
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-green-400 font-medium">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">⚡️</span> Server Component
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="font-mono text-sm text-green-400">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")) {
      return Response.json(await Bun.sql\`SELECT * FROM users\`);
    }
  }
})`}
                </pre>
              </div>
              <p className="text-gray-400 text-sm">
                Built-in SQL, HTTP server and static file serving
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🎨</span> Client Component  
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
              ) : error ? (
                <div className="text-red-400">{error}</div>
              ) : (
                <div className="space-y-2">
                  {users.map(user => (
                    <div key={user.id} className="bg-gray-900 rounded p-2 text-sm">
                      {user.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Built with Bun, React, TypeScript & Tailwind
        </div>
      </div>
    </div>
  );
}
