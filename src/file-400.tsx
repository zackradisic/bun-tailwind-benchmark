import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
            🚀 Bun Fullstack Magic
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Server</h2>
              <pre className="text-sm text-white/80 text-left">
                {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await db.getUsers();
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Client</h2>
              <div className="space-y-4">
                {loading ? (
                  <div className="animate-pulse text-white">Loading users...</div>
                ) : (
                  <ul className="space-y-2">
                    {users.map((user, index) => (
                      <li 
                        key={index} 
                        className="bg-white/10 p-2 rounded-lg text-white hover:bg-white/20 transition-all"
                      >
                        {user.name || 'Anonymous User'}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/10 p-4 text-center text-white">
          <p className="text-sm">Built with 💖 using Bun, React & TypeScript</p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
