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
        <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-lg border border-white/10 shadow-xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Bun Fullstack Speed Demo
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-300">Server-side</h2>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")) {
      return Response.json(
        await Bun.sql\`SELECT * FROM users\`
      );
    }
  }
})`}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-300">Client Data</h2>
              <div className="bg-gray-900/50 rounded-lg p-4">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-purple-400/20 rounded w-3/4"></div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center space-x-2">
                        <span className="h-2 w-2 rounded-full bg-purple-400"></span>
                        <span>{user.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-purple-200 text-sm">Built & bundled instantly with Bun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
