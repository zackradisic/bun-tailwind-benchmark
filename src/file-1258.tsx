import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-6xl font-extrabold text-white text-center mb-8 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-3xl font-bold text-white mb-4">Server</h2>
            <pre className="text-sm text-white/80 overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(
        await Bun.sql\`SELECT * FROM users\`
      );
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-3xl font-bold text-white mb-4">Client</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-bounce text-white text-xl text-center">
                  Loading users...
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  {users.map((user, index) => (
                    <div 
                      key={index} 
                      className="bg-white/20 rounded-lg p-3 text-white hover:bg-white/30 transition-all"
                    >
                      {user.name} - {user.email}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-white/50 text-sm">
          Built with 🔥 Bun, React & TypeScript
        </footer>
      </div>
    </div>
  );
}
