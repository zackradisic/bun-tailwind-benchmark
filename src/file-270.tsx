import React, { useState, useEffect } from 'react';
import type { User } from './types';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<User[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Server-Side 🚀</h2>
            <pre className="text-sm text-gray-200 overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side 💻</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                  <div className="h-4 bg-white/30 rounded w-5/6"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white/20 p-3 rounded-lg text-white hover:bg-white/30 transition-all"
                  >
                    {user.name} - {user.email}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/70 text-sm">
            Built with Bun, React, TypeScript & Tailwind 🔥
          </p>
        </div>
      </div>
    </div>
  );
}
