import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [responseTime, setResponseTime] = useState<number>(0);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const start = performance.now();
    const res = await fetch('/api/users');
    const data = await res.json();
    const end = performance.now();
    setResponseTime(end - start);
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-xl text-gray-300">Lightning fast fullstack React & TypeScript with zero config</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Server Side</h2>
            <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono text-gray-300 overflow-x-auto">
              {`Bun.serve({
  static: {
    "/": html
  },
  fetch: async (req) => {
    const users = await db.query("users");
    return Response.json(users);
  }
})`}
            </pre>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-violet-500/50 transition-all">
            <h2 className="text-2xl font-bold mb-4 text-violet-400">Client Side</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Response Time:</span>
                <span className="font-mono text-emerald-400">{responseTime.toFixed(2)}ms</span>
              </div>
              
              <button
                onClick={fetchUsers}
                className="w-full py-2 px-4 bg-violet-500 hover:bg-violet-600 rounded-lg font-medium transition-colors"
              >
                {loading ? 'Loading...' : 'Fetch Users'}
              </button>

              <div className="bg-black/50 rounded-lg p-4 h-48 overflow-y-auto">
                {users.map((user, i) => (
                  <div key={i} className="text-sm text-gray-300 py-1">
                    {JSON.stringify(user)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Built with Bun + React + TypeScript + Tailwind</p>
        </div>
      </div>
    </div>
  );
}
