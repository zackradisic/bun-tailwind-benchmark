import "./style.css";
import { useState, useEffect } from 'react';

export default function BunSpeedDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <img src="/bun-logo.svg" className="w-16 h-16 animate-bounce" alt="Bun logo"/>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun + React
            </h1>
          </div>
          <div className="text-right">
            <p className="text-lg font-light opacity-75">Fullstack Development</p>
            <p className="text-sm font-mono bg-black/20 px-3 py-1 rounded-full">blazingly fast</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-emerald-400">⚡</span> Server Side
            </h2>
            <pre className="bg-black/30 p-4 rounded-lg text-sm font-mono overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if (req.url.endsWith("/api/users")) {
      return Response.json(await Bun.sql\`
        SELECT * FROM users
      \`);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-sky-400">🚀</span> Client Side
            </h2>
            <div className="space-y-4">
              <div className="animate-pulse bg-white/5 rounded p-3">
                {loading ? (
                  <p className="text-center text-sm">Loading users...</p>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        {user.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-light opacity-50">
            Built with Bun's integrated bundler and HTTP server
          </p>
        </div>
      </div>
    </div>
  );
}
