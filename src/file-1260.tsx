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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun + React = 🚀
          </h1>
          <p className="text-xl text-purple-200">Fullstack TypeScript apps at lightspeed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Server-Side</h2>
            <div className="space-y-3 text-sm">
              <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                <code className="text-green-400">
                  {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(await db.users.all())
    }
  }
})`}
                </code>
              </pre>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4 text-violet-400">Client-Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 bg-white/20 rounded-lg w-full"></div>
                </div>
              ) : (
                <ul className="divide-y divide-white/10">
                  {users.map(user => (
                    <li key={user.id} className="py-3 flex items-center space-x-3">
                      <span className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                        {user.name[0]}
                      </span>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-purple-300 text-sm">
            Built with Bun's integrated bundler & server - no extra build steps needed
          </p>
        </div>
      </div>
    </div>
  );
}
