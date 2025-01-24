import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Full-Stack Magic ✨
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Server-Side</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
              </div>
            ) : error ? (
              <div className="text-red-300">{error}</div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white/10 rounded-lg p-3 text-white hover:bg-white/20 transition-all"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="text-center text-white/70 text-sm">
        Powered by Bun 🚀 React ⚛️ TypeScript 💻
      </div>
    </div>
  );
}
