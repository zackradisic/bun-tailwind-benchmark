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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <img src="/bun.svg" className="w-12 h-12 animate-bounce" alt="Bun logo" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack Demo
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-mono">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-pink-500">⚡️</span> Server Side
            </h2>
            <pre className="bg-black/50 rounded-lg p-4 font-mono text-sm">
              {`Bun.serve({
  static: {
    "/": html 
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-violet-500">🚀</span> Client Side
            </h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center gap-3 bg-black/20 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-sm font-bold">
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

        <div className="mt-8 text-center text-gray-400 text-sm">
          Powered by Bun - React - TypeScript - Tailwind
        </div>
      </div>
    </div>
  );
}
