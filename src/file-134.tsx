import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-pink-400 mb-4">Server-Side</h2>
              <pre className="text-sm text-gray-300 bg-black/20 p-4 rounded-lg">
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users)
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Client-Side</h2>
              <div className="space-y-4">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  </div>
                ) : error ? (
                  <p className="text-red-400">{error}</p>
                ) : (
                  <ul className="space-y-2">
                    {users.map((user, index) => (
                      <li 
                        key={index} 
                        className="bg-white/10 p-3 rounded-lg text-white/80 hover:bg-white/20 transition-all"
                      >
                        {user.name || 'Unknown User'}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-4 text-center border-t border-white/20">
          <p className="text-sm text-white/50">
            Built with 🔥 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
