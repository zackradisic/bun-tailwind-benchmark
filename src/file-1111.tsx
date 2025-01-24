import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-white drop-shadow-lg tracking-tight">
          Bun Fullstack Magic ⚡️
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`const [users, setUsers] = useState([]);
useEffect(() => {
  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };
  fetchUsers();
}, [])`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-white/10 p-6 rounded-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Users List
          </h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-4 text-white">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
              <span>Loading...</span>
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white/20 p-4 rounded-xl text-white hover:bg-white/30 transition-all"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <footer className="text-white/70 text-center text-sm">
        Built with 💖 using Bun, React & TypeScript
      </footer>
    </div>
  );
}
