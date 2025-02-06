import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg animate-pulse">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 shadow-inner border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Magic</h2>
            <pre className="text-sm text-green-200 overflow-x-auto">
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

          <div className="bg-white/10 rounded-xl p-6 shadow-inner border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Client Magic</h2>
            {loading ? (
              <div className="animate-spin w-12 h-12 border-4 border-white/50 border-t-white rounded-full mx-auto"></div>
            ) : (
              <ul className="space-y-2 text-white">
                {users.map((user: any) => (
                  <li key={user.id} className="bg-white/20 rounded-md p-2 hover:bg-white/30 transition-colors">
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-white/80 text-sm flex items-center space-x-2 opacity-75 hover:opacity-100 transition-opacity">
        <span>⚡ Built with Bun</span>
        <span className="text-xl">•</span>
        <span>🔥 React + TypeScript</span>
        <span className="text-xl">•</span>
        <span>🌈 Tailwind CSS</span>
      </div>
    </div>
  );
}
