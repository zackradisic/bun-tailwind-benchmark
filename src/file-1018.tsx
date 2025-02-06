import "./style.css";
import { useState, useEffect } from 'react';

export default function BunDemo() {
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
        <div className="flex items-center space-x-4 mb-12">
          <img src="/bun-logo.png" className="w-16 h-16 animate-bounce" />
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Bun Fullstack Demo
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="text-green-400 mr-2">⚡</span>
              Server-side
            </h2>
            <pre className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if (req.url.endsWith("/api/users")) {
      return Response.json(await db.users.all())
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-violet-500/50 transition-all">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="text-blue-400 mr-2">🚀</span>
              Client-side
            </h2>
            <div className="space-y-4">
              <div className="animate-pulse bg-gray-700/50 rounded-lg p-4">
                {loading ? (
                  <p>Loading users...</p>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-green-400"/>
                        <span>{user.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p className="text-sm">Built with Bun, React, TypeScript & Tailwind</p>
        </div>
      </div>
    </div>
  );
}
